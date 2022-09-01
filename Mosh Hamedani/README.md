# Angular by Mosh Hamedani

## Basics

- **polyfills.ts-**  
install script which are required by angular. Angular uses the  features of JS which are sometime not supported by some browsers. So, it fills the gap between Angular & Browsers.

- **Webpack-**  
Building automation tool.  
It gets all scripts & style sheets combine them put them into a bundle & minimize it.  
This is for optimization.

- **Hot Module Replacement (HMR)-**  
whenever source files are modified Webpack automatically refreshes the page.

## Angular Version History

**AngularJS-** First version, 2010.  
**Angular 2-** Major change, 2016, written in TS.  
**@angular/router-** 3.3.0  
**Angular 4**

## Typescript

- Can catch errors at compile time.

- **Type annotation-** declaring type at declaration time.

### Type assertions-

Sometime typescript is not able to understand the type of a variable, therefore we won't get suggestion. So, we need to explicitely declare it.

```ts
    let message;
    message = 'abc';
    let endsWithC = (<string>message).endsWith('c'); // most common
    let alternateWay = (message as string).endsWith('c');
```

### Interface

```ts
    interface Point {
        x: number,
        y: number
    }
    let drawPoint = (point: Point) => {
        ...
    }
```

### Class & Contructor

```ts
    class Point {
        x: number;
        y: number;

        constructor(x?: number, y?: number){
            this.x=x;
            this.y=y;
        }

        // access modifier in constructor
        // constructor(private x: number, private y: number) {
        // }

        draw() {
            console.log('X: ' + this.x + ', Y: ' + this.y);
        }
    }

    let point = new Point();
    point.draw();
```

### Access Modifier

1. public
2. private
3. protected

### Properties  

> Accessing variables using setters & getters.

### Same as JavaScript

- variables types  
- Arrow Functions  
- interface  
- classes  
- objects  
- constructors  
- modules

## Creating Components

- **Steps-**
   1. Create a Component
   2. Register it in a module
   3. Add a element in an HTML markup

```ts
// 1.
    import { Component } from '@angular/core';

    @Component( {
    selector: 'courses',
    template: '<h2>Courses</h2>'
    } )
    export class CoursesComponent {
    }

// 2.
     @NgModule({
        declarations: [
        AppComponent,
        CoursesComponent
    ],

// 3.
    <h1>Angular</h1>
    <courses></courses>

```

## Services-

let us define code or functionalities that are then accessible and reusable in many other components in our Angular project.

Services are good for tasks such as fetching data from the server, validating user input, or logging directly to the console.  

## Dependency Injection

DI is wired into the Angular framework and allows classes with Angular decorators, such as Components, Directives, Pipes, and Injectables, to configure dependencies that they need.

### Sources

- **Videos-**
  - [Angular Tutorial for Beginners: Learn Angular & TypeScript](https://www.youtube.com/watch?v=k5E2AVpwsko) _By Mosh Hamedani_
