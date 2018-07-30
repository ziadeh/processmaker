<?php
namespace Tests\Feature\Api;

trait SortingTestTrait
{

    /**
     * Assert that a GET endpoint has the sorting properties.
     *
     * @param string $url
     * @param array $sortFields
     */
    protected function assertSorting($url, array $sortFields)
    {
        $parsedUrl = parse_url($url);
        parse_str(isset($parsedUrl['query']) ? $parsedUrl['query'] : '', $query);
        $orders = ['ASC', 'DESC'];
        foreach ($sortFields as $field) {
            foreach ($orders as $order) {
                $query['order_by'] = $field;
                $query['order_direction'] = $order;
                $parsedUrl['query'] = http_build_query($query);
                $testUrl = $this->unparseUrl($parsedUrl);
                $response = $this->api('GET', $testUrl);
                //Validate the answer is correct
                $response->assertStatus(200);
                //verify structure paginate
                $response->assertJsonStructure([
                    'data',
                    'meta',
                ]);
                $this->assertEquals($order, $response->original->meta->sort_order, 'Missing sort_order in meta url=' . $testUrl);
                $this->assertEquals($field, $response->original->meta->sort_by, 'Missing sort_by in meta');
                $data = $response->json('data');
                $previousRow = null;
                foreach ($data as $row) {
                    if ($previousRow && $order === 'ASC') {
                        $this->assertGreaterThanOrEqual($previousRow[$field], $row[$field], 'Missing order for ' . $field . ' url=' . $testUrl);
                        //assertLessThanOrEqual
                    }
                    if ($previousRow && $order === 'DESC') {
                        $this->assertLessThanOrEqual($previousRow[$field], $row[$field], 'Missing order for ' . $field . ' url=' . $testUrl);
                    }
                    $previousRow = $row;
                }
            }
        }
    }

    /**
     * Convert back to string a parsed URL.
     *
     * @param array $parsedUrl
     *
     * @return string
     */
    private function unparseUrl(array $parsedUrl)
    {
        $scheme = isset($parsedUrl['scheme']) ? $parsedUrl['scheme'] . '://' : '';
        $host = isset($parsedUrl['host']) ? $parsedUrl['host'] : '';
        $port = isset($parsedUrl['port']) ? ':' . $parsedUrl['port'] : '';
        $user = isset($parsedUrl['user']) ? $parsedUrl['user'] : '';
        $pass = isset($parsedUrl['pass']) ? ':' . $parsedUrl['pass'] : '';
        $pass = ($user || $pass) ? "$pass@" : '';
        $path = isset($parsedUrl['path']) ? $parsedUrl['path'] : '';
        $query = isset($parsedUrl['query']) ? '?' . $parsedUrl['query'] : '';
        $fragment = isset($parsedUrl['fragment']) ? '#' . $parsedUrl['fragment'] : '';
        return "$scheme$user$pass$host$port$path$query$fragment";
    }
}
