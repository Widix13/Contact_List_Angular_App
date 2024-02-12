# ContactListWebApp

This project was generated with Angular CLI version 16.2.1.

## Development server

Running `ng serve` starts the development server. Navigate to [http://localhost:4200/](http://localhost:4200/) to see the application. The application will automatically reload after each change in the source files.

## Building the application

Running `ng build` builds the project. The built files will be stored in the `dist/` directory.

## Logging, Authentication, Guards, and Interceptors

The application includes mechanisms for logging in, authentication, guards, and interceptors, providing security and access control to various parts of the application:

- **AppComponent:** The main application component, which contains the HTML template and event handling logic for the entire application.
- **AppRoutingModule:** Routing module that defines routing for various parts of the application and access controls using guards.
- **AuthGuard:** Guard that checks if the user is logged in before navigating to protected routes of the application. If the user is not logged in, they are redirected to the login page.
- **AuthService:** Authentication service that manages the login, logout process, and stores information about the logged-in user.
- **InterceptorService:** HTTP interceptor that intercepts HTTP requests and responses in the application, allowing, for example, the addition of authentication headers to requests.
- **ContactService:** Service that handles operations on contacts, such as fetching, adding, editing, and deleting contacts. It communicates with APIs or other services to perform operations on contacts.

These mechanisms are crucial for ensuring the security of the application and controlling access to its resources. Additional information about their implementation can be found in the application's technical documentation.

## Used libraries

- [Angular CLI](https://github.com/angular/angular-cli) - a tool for generating, building, and testing Angular applications.
- [Angular Material](https://material.angular.io) - a set of UI components based on Material Design.
- [RxJS](https://rxjs.dev) - a library for reactive programming, used, among other things, for handling asynchronous HTTP operations.

## Further assistance

For more information about Angular CLI, use `ng help` or check the [Angular CLI Overview and Command Reference](https://angular.io/cli).

This specification provides information about running, building, testing, and scaffolding code for the front-end application. You can customize this specification by adding more details or modifying it according to your project requirements.
