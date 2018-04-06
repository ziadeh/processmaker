/**
 * Task Shape class
 */
export class TaskShape {

    constructor(canvas, svgLoader) {
        this.canvas = canvas;
        this.scaleX = 100;
        this.scaleY = 80;
        this.svgLoader = svgLoader;
        this.rounded = 10;
        this.attr = {
            fill: '#FFF',
            stroke: '#000',
            strokeWidth: 2
        };
        this.shape = this.canvas.group();
        this.inputConnectors = new Map();
        this.outputConnectors = new Map();
    }

    config(options) {
        this.options = options;
        this.id = options.id;
        this.x = +options.x;
        this.y = +options.y;
        this.scaleX = +options.width || this.scaleX;
        this.scaleY = +options.height || this.scaleY;
        this.rounded = +options.rounded || this.rounded;
        this.attr = options.attr || this.attr;
        this.attr.id = options.id;
    }

    render(){
        this.shape.add(this.canvas.rect(
            this.x,
            this.y,
            this.scaleX,
            this.scaleY,
            this.rounded
        ).attr(this.attr));

        const text = this.canvas.multitext(
            this.x,
            this.y,
            this.options.name,
            this.scaleX,
            {'font-size': '13px', 'font-family': 'Arial, Helvetica, sans-serif'}
        );
        const textBox = text.getBBox();
        text.attr({
            x: this.x + (this.scaleX - textBox.w) / 2,
            y: this.y + (this.scaleY - textBox.h) / 2 - 5
        });
        this.shape.add(text);
        this.addDecorators();
        this.shape.drag();
    }

    addDecorators(){
        this.addTypeDecorator(this.options.$type || 'EMPTY');//(this.options.act_task_type);
        this.addMarkerDecorator(this.options.act_loop_type || 'EMPTY');//(this.options.act_loop_type);
    }

    addTypeDecorator(type) {
        const x = this.x + this.x * 0.037;
        const y = this.y + this.y * 0.037;
        if (type !== 'bpmn:Task') {
            const types = {
                'bpmn:UserTask': {
                    path: 'm492 206l-5 1c-84 0-140 60-140 139 0 39 29 74 58 100-16 5-54 19-93 41-23 12-45 27-62 44-16 17-28 37-29 58l0 0 0 204 98 0c1 1 2 1 3 0l457 0 0-204c0-19-12-37-29-53-18-17-41-32-64-45-42-24-83-40-99-46 28-26 48-60 48-99 0-79-58-140-143-140z m-38 82c13 0 27 3 40 10 59 31 121 43 132 34 1 4 1 9 1 14 0 38-21 73-50 97l-6 5 7 2c6 2 35 13 69 29-2 70-70 127-154 127-84 0-151-55-153-125 35-17 67-28 74-30l7-2-6-5c-29-25-60-60-60-98 0-5 0-10 1-15 10-8 52-42 98-43z m198 194c10 5 20 10 30 16 23 13 46 28 62 43 17 16 27 33 27 48l0 196-90 0 0-144-8 0 0 144-349 0 0-144c0-6-8-6-8 0l0 144-87 0 0-196c1-18 11-36 27-52 16-16 38-31 60-43 6-4 12-7 19-10 3 72 73 127 158 127 86 0 156-57 159-129z',
                    options: {
                        x: x - 4, y: y - 4, scale: 's0.035', attr: {
                            stroke: '#000',
                            strokeWidth: 30,
                        }
                    }
                },
                'SENDTASK': {
                    path: 'm112 206l388 214 388-214-776 0z m0 105l0 483 776 0 0-483-388 193-388-193z', options: {
                        x: x, y: y - 3, scale: 's0.035', attr: {
                            stroke: '#000',
                            strokeWidth: 30,
                        }
                    }
                },
                'RECEIVETASK': {
                    path: 'm115 206c0 0 0 0-1 0 0 0 0 0 0 0-1 1-2 2-2 3l0 582c0 1 1 2 3 2l771 0c1 0 2-1 2-2l0-582c0-1-1-2-2-3 0 0 0 0 0 0 0 0 0 0 0 0l-481 0z m9 5l753 0-377 228z m-7 2l382 231c1 0 2 0 2 0l382-231 0 575-766 0z',
                    options: {
                        x: x, y: y - 3, scale: 's0.035', attr: {
                            stroke: '#000',
                            strokeWidth: 30
                        }
                    }
                },
                'bpmn:ServiceTask': {
                    path: 'm396 204l0 3 0 49c-11 3-21 6-32 10l0 0 0 0c-10 5-20 10-29 16l-38-37-53 53 38 37c-12 19-21 40-25 61l-53 0 0 76 53 0c2 10 6 21 10 31 4 11 10 20 16 29l-39 38 54 53 37-36 0 15 33-1c8 3 15 6 23 8 1 7 4 14 7 22l0 33 2 0c4 0 8 1 12 1l-36 35 54 53 38-38c19 12 40 20 62 25l0 54 2 0c24 0 71 0 71 0l0 0 2 0 0-2 0-52c11-3 22-6 32-10l0 0 0 0c10-5 20-10 29-16l39 38 53-54-38-37c12-19 20-40 25-62l52 0 0-75-53 0c-2-10-5-21-10-31l0 0c-4-11-10-20-16-29l37-37-54-53-36 36 0-16-3 0-29 0c-8-3-15-5-22-7-2-7-5-14-7-22l0-31-17 0c0 0 0 0 0 0l36-37-54-53-36 37c-19-12-40-21-61-25l0-52-76 0z m5 5l66 0 0 51 2 0c22 5 44 13 63 26l2 1 35-36 47 46-36 36 1 1-53 0 0 0 0 33c-31-42-87-60-137-39-59 24-86 91-61 149l0 0c8 21 22 37 39 49l-34 0 0 0 0 54-37 36-47-46 38-37-1-2c-6-9-12-19-16-30l0 0c-5-11-8-22-10-32l-1-2-52 0 0-66 52 0 0-2c5-22 13-44 26-63l1-1-37-37 47-46 36 36 2-1c9-6 19-12 30-16l0 0c11-5 22-8 33-10l2-1 0-51z m32 115c38 0 74 19 95 52l0 10c-11 2-22 6-32 10l0 0 0 0c-11 4-20 10-29 16l-38-37-53 53 37 37c-12 19-20 39-25 61l-9 0c-20-11-36-29-45-51l0 0c-23-55 3-119 58-142l0 0c14-6 28-8 41-9z m100 15l57 0 9 0 0 27 0 0-1 24 2 0c3 1 6 1 8 2l1 0c8 2 15 4 22 7l0 0c11 4 21 9 30 15l1 1c1 0 1 0 2 1l1 1 36-36 47 46-36 36 1 2c7 9 12 19 17 30l0 0c4 10 7 21 10 32l0 2 52 0 0 65-51 1-1 2c-4 22-13 43-26 63l-1 1 38 37-46 47-38-37-2 1c-9 6-19 12-30 16-11 5-22 8-33 10l-2 1 0 53c-4 0-43 0-65 0l0-53-2 0c-23-5-45-14-64-26l-1-1-38 37-47-46 36-35 3 0-1-2 0 0-1-1-1-1c-1-2-2-4-3-6-3-4-5-8-7-12-1-1-1-2-1-2 0-1-1-2-1-2 0-1-1-1-1-2 0-1-1-1-1-2 0-1 0-1-1-2 0-1 0-1-1-2l0 0 0 0c0-1 0-1 0-2l-1-1 0 0c-3-7-5-14-7-21l0-1 0 0c0 0 0 0 0 0-1-3-1-5-2-7l0-3 0 0 0 0-2 0-12 0-10 0-29 1 0-9 0-57 52 0 1-2c4-22 13-44 26-63l1-2-37-36 46-46 37 36 2-1c9-6 19-12 30-16l0 0c11-5 22-8 33-11l2 0 0-6 0-2 0-43z m70 41c1 2 2 4 2 6 0 0-1 0-2 0l0 0 0-6z m57 19l0 9c-5-3-11-6-16-9l16 0z m-93 50c-1 0-2 0-3 0l0 0c0 0 0 0 0 0l0 0 0 0c-1 0-1 0-1 0l0 0c-2 0-3 0-5 0l0 0c0 0 0 1 0 1l0 0c-12 0-24 3-36 8-39 16-64 52-69 91l0 0c0 0 0 0 0 0 0 1 0 1 0 1 0 0 0 0 0 0l0 0c0 0 0 0 0 0l0 0c0 1 0 2 0 3l0 0c0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0l0 0c-1 2-1 5-1 8l0 0c0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0l0 0c0 3 0 5 0 8l0 0c0 0 0 0 0 0 0 0 0 0 0 0l0 0c1 3 1 5 1 8l0 0c0 0 0 0 0 1l0 0c1 1 1 2 1 3l0 0c0 0 0 0 0 0l0 0c0 0 0 0 0 0 0 1 0 1 0 1l0 0c0 0 0 0 0 0l0 0c0 1 0 2 1 3l0 0c0 0 0 0 0 0 0 0 0 1 0 1l0 0c0 1 0 2 1 4l0 0c0 0 0 0 0 0 0 0 0 0 0 0l0 0c0 1 0 2 1 3l0 0 0 0c0 1 0 1 0 1l0 0c1 3 1 5 2 7 1 1 1 1 1 2l0 0c0 0 0 0 0 0l0 0c1 1 1 2 1 3l0 0c1 1 1 2 2 3 0 0 0 0 0 0 0 1 0 1 0 1 1 3 2 5 4 7 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 28 49 90 71 144 49 58-25 85-92 61-149-11-25-29-44-51-56l0 0c0 0 0 0 0 0l0 0 0 0c-1-1-2-1-3-1l0 0c0-1 0-1 0-1l0 0c-2 0-3-1-4-1l0 0c0 0 0 0 0 0l0 0c-1-1-2-1-3-2l0 0c0 0 0 0 0 0l0 0 0 0c-1 0-2-1-3-1l0 0c0 0-1 0-1 0l0 0c-1-1-2-1-3-1l0 0c0-1 0-1-1-1l0 0c-1 0-1 0-2 0l0 0c-1-1-1-1-1-1l0 0c-2 0-5-1-7-2l0 0c0 0 0 0 0 0l0 0 0 0c-1 0-2 0-3 0l0 0c0 0-1 0-1-1l0 0c-1 0-2 0-3 0l0 0c-1 0-1 0-1 0l0 0 0 0c-1 0-2-1-3-1l0 0c0 0 0 0-1 0l0 0c-1 0-2 0-3 0l0 0c0 0 0 0 0 0l0 0c-1 0-2 0-3-1l0 0c-1 0-1 0-1 0l0 0c-1 0-3 0-4 0 0 0 0 0 0 0l0 0 0 0c-1 0-2 0-3 0z m0 5l0 0c1 0 2 0 3 0l0 0c0 0 0 0 1 0l0 0c1 0 1 0 2 0l0 0c1 0 1 0 1 0l0 0c1 1 2 1 3 1l0 0c1 0 1 0 1 0l0 0c1 0 2 0 3 0l0 0c0 0 0 0 1 0l0 0c0 0 1 1 2 1l0 0c1 0 1 0 1 0l0 0c1 0 2 0 3 0l0 0c0 0 0 0 1 1l0 0c1 0 2 0 2 0l0 0c1 0 1 0 1 0l0 0c2 1 4 1 6 2l0 0c1 0 1 0 1 0l0 0c1 1 2 1 3 1l0 0c0 0 0 0 0 0l0 0c1 1 2 1 4 1l0 0c0 0 0 1 0 1l0 0 0 0c1 0 2 0 3 1l0 0c0 0 0 0 0 0l0 0c1 0 2 1 3 1l0 0c0 0 0 0 0 0l0 0c1 1 2 1 3 2l0 0c0 0 1 0 1 0l0 0c1 0 2 1 2 1l0 0c1 0 1 1 1 1l0 0c21 11 38 29 48 53 23 55-3 119-58 142l0 0c-52 22-111 1-138-47 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0l0 0c-1-2-2-5-3-7 0 0 0 0 0 0 0 0 0 0 0 0-1 0-1-1-1-1 0 0 0 0 0 0 0-1-1-2-1-3 0 0 0 0 0 0-1-1-1-2-1-3-1 0-1-1-1-1 0 0 0 0 0 0-1-3-2-5-2-7l0 0c0-1 0-1 0-1 0 0 0 0 0 0-1-1-1-2-1-3l0 0c0 0 0 0 0 0 0 0 0-1 0-1 0 0 0 0 0 0 0 0 0 0 0 0l0 0c-1-1-1-2-1-3l0 0c0 0 0-1 0-1-1-1-1-2-1-3l0 0c0 0 0 0 0 0 0 0 0 0 0-1 0 0 0 0 0 0l0 0c0-1-1-2-1-3l0 0c0 0 0 0 0 0 0 0 0-1 0-1l0 0c0-2 0-5-1-7l0 0c0 0 0 0 0 0 0 0 0 0 0-1l0 0c0-2 0-5 0-7l0 0c0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0l0 0c0-3 0-5 1-8l0 0c0 0 0 0 0 0l0 0c0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0l0 0c0-1 0-3 0-4l0 0c0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0l0 0c5-37 29-72 66-87l0 0c11-5 23-8 34-8l0 0c0-1 0-1 1-1l0 0c1 0 2 0 4 0l0 0c0 0 1 0 1 0l0 0c1 0 2 0 3 0z m-178 147l0 0c0 1 0 1 0 2-2-1-3-1-5-2l5 0z m14 41c3 6 6 12 10 18-4 0-7-1-10-1l0-17z',
                    options: {
                        x: x - 3, y: y - 3, scale: 's0.035', attr: {
                            stroke: '#000',
                            strokeWidth: 20
                        }
                    }
                },
                'bpmn:ScriptTask': {
                    path: 'm385 206l-2 1c-57 34-96 65-121 94-24 29-35 56-35 81-1 51 39 93 78 133 39 40 78 78 82 119 2 21-4 43-23 67-20 25-53 52-104 82l-19 10 389 0 2 0c52-31 86-58 107-85 21-26 28-51 26-75-5-47-47-86-86-126-39-40-75-80-74-125 0-22 9-46 32-74 24-27 62-57 118-91l18-11-388 0z m3 12l344 0c-48 30-81 57-103 83-25 29-36 56-36 81-1 51 39 93 78 133 39 40 78 78 82 119 2 21-4 43-23 67-19 24-52 51-103 81l-344 0c43-26 71-51 90-74 21-26 28-51 25-75-5-47-46-86-85-126-39-40-75-80-75-125 1-22 10-46 33-74 23-27 61-57 117-90z m-50 102c-8 0-8 11 0 11l205 0c8 0 8-11 0-11l-46 0-159 0z m20 115c-7 0-7 12 0 12l188 0c7 0 7-12 0-12l-188 0z m63 116c-8 0-8 11 0 11l208 0c8 0 8-11 0-11l-208 0z m41 115c-7 0-7 12 0 12l208 0c8 0 8-12 0-12l-208 0z',
                    options: {
                        x: x - 3, y: y - 3, scale: 's0.035', attr: {
                            stroke: '#000',
                            strokeWidth: 20
                        }
                    }
                },
                'MANUALTASK': {
                    path: 'm460 206c-7 0-15 3-22 8l0 0 0 0c-47 30-209 143-245 167-29 20-49 50-61 87l0 0 0 0c-12 38-10 82-10 120l0 0 0 0c0 28 1 51 8 79 0 0 0 0 0 0 0 0 0 0 0 0 10 42 28 73 54 94 25 21 59 32 97 32 147 1 293 1 439 0l0 0 0 0c12 0 22-3 29-10 7-7 11-18 11-33l0 0c0-15-3-26-11-32-7-6-17-9-29-9l0 0c-55 0-184 0-189 0l0-21 252 0c13 0 23-2 31-6 8-5 14-14 16-25 4-18 1-32-7-41-8-10-21-14-38-14l0 0c-77 0-249 0-254 0l0-19c5 0 271 0 302 0 16 0 28-5 35-13 7-9 10-21 10-37 0-15-4-27-11-34-8-8-20-11-34-11l0 0c-93 0-298 0-302 0l0-19c5 0 159 0 226 0l0 0 0 0c15 0 26-5 34-13 8-9 12-21 12-37l0 0 0 0c0-15-4-27-12-36-8-8-20-13-34-13l0 0c-55 0-141 0-214 1-36 0-70 0-94 0-13 0-23 0-30-1-4 0-7 0-9 0-1 0-2 0-2 0-1 0-1 0-1 0 0 0 0 0-1-1 0 0 1-1 0 0 6-7 22-23 38-39 16-16 32-32 39-40l0 0c15-20 17-48 5-66l0 0c-7-11-15-16-24-17-1 0-2-1-4-1z m0 5c1 0 2 1 3 1 7 1 14 5 21 15l0 0 0 0c10 16 9 41-5 60l0 0 0 0c-6 7-22 23-39 39-16 17-32 32-38 39-1 2-1 5 0 6 1 2 2 3 4 4 0 0 1 0 2 0 0 0 1 0 2 0 2 0 5 0 9 0 7 1 17 1 30 1 24 0 58 0 94 0 73-1 159-1 214-1l0 0 0 0c13 0 23 4 30 12 7 7 11 18 11 33 0 14-4 25-11 33-6 7-16 11-30 11-68 0-228 0-228 0l-3 0 0 29 3 0c0 0 210 0 304 0 14 0 24 3 30 9 7 7 10 17 10 31 0 15-3 26-9 34-6 7-16 11-31 11-31 0-304 0-304 0l-3 0 0 29 3 0c0 0 178 0 256 0l0 0 0 0c16 0 27 4 34 12 7 8 10 20 6 37l0 0 0 0c-2 11-6 17-13 21-7 4-17 6-29 6l-257 0 0 3 0 28 3 0c0 0 135 0 191 0l0 0c12 0 20 3 26 8 6 5 9 14 9 28l0 0 0 0c0 14-4 23-9 29-6 6-15 9-26 9-146 1-292 1-439 0l0 0 0 0c-38 0-69-10-94-31-25-20-43-50-53-91l0 0 0 0c-6-28-7-50-7-78l0 0c0-38-1-82 10-118 12-36 31-65 59-85 36-24 198-137 244-167l0 0c7-4 14-7 20-7z',
                    options: {
                        x: x, y: y - 3, scale: 's0.035', attr: {
                            stroke: '#000',
                            strokeWidth: 20
                        }
                    }
                },
                'BUSINESSRULE': {
                    path: 'm104 206l0 294 0 32 0 5 0 256 194 0 5 0 593 0 0-293 0-294-792 0z m5 194l189 0 0 132-189 0 0-32 0-100z m194 0l588 0 0 100 0 32-588 0 0-132z m-194 137l189 0 0 251-189 0 0-251z m194 0l588 0 0 251-588 0 0-251z',
                    options: {
                        x: x, y: y - 3, scale: 's0.035', attr: {
                            stroke: '#000',
                            strokeWidth: 20
                        }
                    }
                }
            };

            this.shape.add(
                this.svgLoader.loadElement(
                    types[type].path,
                    types[type].options
                )
            );
        }
    }

    addMarkerDecorator(marker) {
        const x = this.x + this.x * 0.031 + this.scaleX / 2 - 15;
        const y = this.y + this.y * 0.031 + this.scaleY - 27;

        if (marker !== 'EMPTY') {
            const markers = {
                'LOOP': {
                    path: 'm500 178c-175 0-317 141-317 314 0 87 36 165 93 222 27 27 60 49 96 65l-184 32-5 1 2 10 5-1 190-33 5-1 0-3 0 1-37-200 0-5-10 2 1 4 33 182c-33-15-63-36-89-61-56-55-90-131-90-215 0-168 137-304 307-304 170 0 307 136 307 304 0 168-137 304-307 304l-5 0 0 10 5 0c175 0 317-141 317-314 0-173-142-314-317-314z',
                    options: {
                        x: x, y: y, scale: 's0.03', attr: {
                            stroke: '#000',
                            strokeWidth: 30
                        }
                    }
                },
                'SEQUENTIAL': {
                    path: 'm150 178l0 130 700 0 0-130-700 0z m0 257l0 130 700 0 0-130-700 0z m0 257l0 130 700 0 0-130-700 0z',
                    options: {
                        x: x, y: y, scale: 's0.03', attr: {
                            stroke: '#000',
                            strokeWidth: 0
                        }
                    }
                },
                'PARALLEL': {
                    path: 'm178 150l0 700 130 0 0-700-130 0z m257 0l0 700 130 0 0-700-130 0z m257 0l0 700 130 0 0-700-130 0z',
                    options: {
                        x: x, y: y, scale: 's0.03', attr: {
                            stroke: '#000',
                            strokeWidth: 0
                        }
                    }
                },
                'COLLAPSED': {
                    path: 'm115 115l0 5 0 765 770 0 0-770-770 0z m10 10l750 0 0 750-750 0 0-750z m355 75l0 280-280 0 0 40 280 0 0 280 40 0 0-280 280 0 0-40-280 0 0-280-40 0z',
                    options: {
                        x: x, y: y, scale: 's0.03', attr: {
                            stroke: '#000',
                            strokeWidth: 20
                        }
                    }
                }
            };

            this.shape.add(
                this.svgLoader.loadElement(
                    markers[marker].path,
                    markers[marker].options
                )
            );
        }
    }

    getNativeShape() {
        return this.shape;
    }

    registerInputConn(id, conn) {
        this.inputConnectors.set(id, conn);
        this.setDirections(conn)
    }

    registerOutputConn(id, conn) {
        this.outputConnectors.set(id, conn);
        this.setDirections(conn)
    }

    setDirections(conn) {
        conn.getShape().inputDirection = 'LEFT';
        conn.getShape().outputDirection = 'RIGHT';
    }

    /**
     * Refresh all shapes connectors
     * @param posx
     * @param posy
     */
    refreshAllConnections(nativeShape) {
        let conn, dX, dY;
        const shapeBox = nativeShape.getBBox();


        this.outputConnectors.forEach(function (value, key) {
            conn = value;

            if (conn.shape.outputDirection === 'RIGHT') {
                dX = shapeBox.width;
                dY = shapeBox.height / 2;
            }

            let linesArray = conn.shape.router;
            let n = linesArray.length;

            conn.shape.options.method = 'manhathan';
            conn.shape.config(conn.shape.options);

            conn.shape.redraw(shapeBox.x + dX, shapeBox.y + dY, linesArray[n - 1].x, linesArray[n - 1].y);
        });

        this.inputConnectors.forEach(function (value, key) {
            conn = value;
            if (conn.shape.inputDirection === 'LEFT') {
                dX = 0;
                dY = shapeBox.height / 2;
            }

            let linesArray = conn.shape.router;
            let n = linesArray.length;

            conn.shape.options.method = 'manhathan';
            conn.shape.config(conn.shape.options);

            conn.shape.redraw(linesArray[0].x, linesArray[0].y, shapeBox.x + dX, shapeBox.y + dY);

        })
    }
}
