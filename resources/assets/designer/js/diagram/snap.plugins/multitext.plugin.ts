export function multitext(Snap, Element, Paper, glob) {
    Paper.prototype.multitext = function (x, y, txt, maxWidth, attributes) {
        const svg = Snap();
        const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const temp = svg.text(0, 0, abc);
        const letterWidth = temp.getBBox().width / abc.length;
        temp.attr(attributes);
        svg.remove();

        const words = txt.split(' '),
            lines = [''],
            linesWidth = [];
        let widthSoFar = 0,
            currentLine = 0;

        for (let i = 0; i < words.length; i++) {
            const l = words[i].length;
            if (widthSoFar + (l * letterWidth) > maxWidth) {
                lines.push('');
                lines[currentLine] = lines[currentLine].trim();
                currentLine++;
                linesWidth.push(widthSoFar);
                widthSoFar = 0;
            }
            widthSoFar += l * letterWidth;
            lines[currentLine] += words[i] + ' ';
        }
        // this last push is required to capture the last line width, improvement required.
        linesWidth.push(widthSoFar);

        const t = this.text(x, y, lines).attr(attributes);
        let lineCounter = 0;
        t.selectAll('tspan:nth-child(n+1)').forEach((element) => {
            const width = linesWidth[lineCounter];
            const elX = x + (maxWidth - width) / 2;
            element.attr({
                dy: '1.2em',
                x: elX
            });
            lineCounter++;
        });
        return t;
    };
}
