# Angular by Maximilian

## Notes

- [Mosh Hamedani](Mosh%20Hamedani)
- [CodeWithHarry](CodeWithHarry)

## The Basics

- **Prerequisite-**  
Install NodeJS  
NPM- `npm install -g @angular/cli`

- **Angular cmds-**  
    Help `ng help`  
    Short help- `ng generate --help`  
    Installing Bootstrap- `npm install --save bootstrap@3`  

    Creating app- `ng new first-app`  
    Creating app- `ng new first-app --no-strict`  
    Checking angular version- `ng v`  
    Install dependencies locally- `npm install`  

    Create component- `ng generate component servers`  
    Create component excluding tests- `ng g c recipes --skip-tests true`  

    Create service- `ng g s service_name`

    Running application- `ng serve`  
    Running application on other port- `ng serve --port 4500`  

    Building `ng build --prod`

## Basics  

- **Components-**  
Key feature, we divide our application into number of components.  

- **Module-**  
Bundle the functionality of our app.  
Module is a container for a group of related components.

- **Decorators-**  
Are the functions which supply info about class, parameter or method.  
E.g : @Component, @NgModule, etc.

- **Databinding-**  
Communicating in between ts-code and html-template.  
  1. **Output Data-**  
   *String Interpolation-* Allowing dynamic values `{{ }}`  
   *Property Binding-* Binding a attribute to a property which will change at runtime. `[ ]`  

  2. **React to User Events-**  
   *Event Binding-* ` () `  
  3. **Two-Way-Binding-** Combining both ` [( )] `  

- **Directives-**  
Directives are instructions in the DOM. Directives are classes that add additional behavior to elements in your Angular applications.  
We use directives to manipulate the DOM.  
Can use to add DOM element or Remove an existing DOM element or Change style or class of a DOM element and so on.

    ***ngIf**(structural)-  
    **ngStyle**(attribute)- add style to element dynamically  
    **ngClass**- add or remove classes dynamically  
    ***ngFor**-  
    **ngSubmit**- specifies a function to run when the form is submitted  
    **ngModel**- binds the value of HTML controls (input, select, textarea) to application data

## TypeScript  

Superset of JS  

- **TypeScript cmds-**  
Initialize package.json- `npm init -y`  
Install typescript- `npm install typescript`  
Compiling with config file- `npx tsc with-typescript.ts`  
Compiling without config file- `npx tsc`  
Adding tsconfig.json file- `npx tsc --init`  

- **Base Types-**  
*Primitives-* number, string, boolean  
*More complex types-* arrays, objects  
Function types, parameters  
any, enum

- **Type inference-**  
Asigning value at the time of declaration automatically declare its type also.  

- **Union types-**  
Allow us to declare multiple types at the time of declaration.  

- **Type Aliases-**  
Using an aliase for reducing the redundancy.  

## Components & Databinding

- **Binding to custom properties-**  
using `@Input()`  
assigning alias `@Input('srvElement')`  

- **Binding to custom Events-**  
using `@Output()`  
assigning alias `@Output('bpCreated')`  

- **View encapsulation-**  
By default the style is applied to only particular component, not the whole application.  

    **Values-**
    1. *Emulated:* default.
    2. *None:* Use global CSS without any encapsulation.
    3. *ShadowDom:* Use its own Shadow DOM.  

- **Local References in template-**  
`#serverNameInput` can be used anywhere inside template. It act as a reference to the whole element and can be use to pass the values.  

- **Getting access to template and DOM using @ViewChild-**  
Using `@ViewChild('serverContentInput',{static: true})`. Can be used to access local reference before occurence of an event.  

- **Projecting content into components with ng-content-**  
Use for injecting HTML content.  

### Sources

- **Videos-**
  - [Angular - The Complete Guide (2022 Edition)](https://www.udemy.com/course/the-complete-guide-to-angular-2) *by Maximilian Schwarzmüller*

- **Some Links-**
  - [angular-cli](https://github.com/angular/angular-cli)
  - [typescript](https://www.typescriptlang.org/)
