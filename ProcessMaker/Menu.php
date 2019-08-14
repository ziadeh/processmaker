<?php

namespace ProcessMaker;

class Menu
{
    public static $count = 0;

    public $id;
    public $title;
    public $items = [];
    public $route;
    private $groupStack = [];

    public function __construct($id = null, array $properties = [])
    {
        $this->id = $id ?: 'menu_' . (++static::$count);
        foreach ($properties as $key => $value) {
            $this->$key = $value;
        }
    }

    public function make($id, callable $callback)
    {
        $menu = isset($this->items[$id]) ? $this->items[$id] : new static($id);
        $this->items[$menu->id] = $menu;
        $callback($menu);
    }

    public function add($title, array $properties = [])
    {
        $menu = new static(null, array_merge($this->groupStack, $properties));
        $menu->title = $title;
        $this->items[$menu->id] = $menu;
        return $menu;
    }

    public function group(array $properties, callable $callable)
    {
        $this->groupStack = array_merge($this->groupStack, $properties);
        call_user_func($callable, $this);
        return $this;
    }

    public function active($active)
    {
        $this->active = $active;
    }

    public function get($name)
    {
        return $this->items[$name];
    }

    public function topMenu()
    {
        return $this;
    }

    public function children()
    {
        return $this->items;
    }

    public function url()
    {
        if (!empty($this->href)) {
            return $this->href;
        } elseif (!empty($this->route)) {
            $route = is_array($this->route) ? $this->route[0] : $this->route;
            $options = is_array($this->route) ? array_slice($this->route, 1) : [];
            return route($route, $options);
        }
    }

    public function isActive()
    {
        return true;
    }

    public function attributes()
    {
        $array = (array) $this;
        return $array;
    }

    public function attr($name)
    {
        return $this->$name;
    }

    public function __get($name)
    {
        if (method_exists($this, $name)) {
            return $this->$name();
        }
    }
}
