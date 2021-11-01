### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
Json Web Token is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.

- What is the signature portion of the JWT?  What does it do?
The signature is used to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is. To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes, the token can be decoded to see the user information.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
1. Register user - create token for user using jwt.sign and secret key 
2. Authenticate user - verify user token using jwt.verify and secret key 
3. Returned token can be used to authenticate user to perform operations
4. Different roles can be assigned as needed when creating the token (admin=true)

- Compare and contrast unit, integration and end-to-end tests.

unit: type of testing which is done by software developers in which the smallest testable module of an application - like functions, procedures or interfaces - are tested to ascertain if they are fit to use.

integration: testing in which individual software modules are combined and tested as a group.

end-to-end tests: End-to-end testing tests an application’s flow from start to end. The purpose of E2E testing is to simulate an entire real user scenario

- What is a mock? What are some things you would mock?

Mocking is primarily used in unit testing
An object under test may have dependencies on other (complex) objects
To isolate the behavior, you replace other objects by mocks that simulate their behavior
This is useful if the real objects are impractical to incorporate into the unit test.

- What is continuous integration?
Continuous Integration is the practice of merging in small code changes frequently, rather than merging in a large change at the end of a development cycle.
The goal is to build better software by developing and testing in smaller increments.

- What is an environment variable and what are they used for?
An environment variable is a variable whose value is set outside the program, typically through functionality built into the operating system or microservice. An environment variable is made up of a name/value pair, and any number may be created and available for reference at a point in time.
The primary use case for environment variables is to limit the need to modify and re-release an application due to changes in configuration data.

- What is TDD? What are some benefits and drawbacks?
Test Driven Development
Write tests first - they will fail
Only write the code necessary to get the tests to pass
Focus on completing the task/user story at hand
As you write more code, keep running tests and make sure they are passing
advantages: High test coverage, Less debugging, Tests document the code, Easier to refactor, You only write code that’s needed 

disadvantages: slow process, Tests have to be maintained when requirements change


- What is the value of using JSONSchema for validation?
The primary strength of JSON Schema is that it generates clear, human- and machine-readable documentation. It's easy to accurately describe the structure of data in a way that developers can use for automating validation. This makes work easier for developers and testers, but the benefits go beyond productivity

- What are some ways to decide which code to test?
Test the code that can possibly break
Based on complexity - if a method is not complex enough (like getters and setters), no unit testing is needed
Function return values
Tests should verify the logic against given acceptance criteria/requirements for the application 
Code coverage tools

- What does `RETURNING` do in SQL? When would you use it?
Returning defines what fields to include in the object returned. For example, when we perform DELETE operation, it does not return any fields, so we need to explicitely define what fields need to be returned using RETURNING key word. 

- What are some differences between Web Sockets and HTTP?
WebSocket is a protocol providing full-duplex communication channels over a single TCP connection. Where as, HTTP providing half-duplex communication.
Information exchange mode of WebSocket is bidirectional. Means, server can push information to the client (which does not allow direct HTTP).
The contents of each stream are HTTP requests and responses, just encoded and packed up differently. Where as, WebSocket adds a number of features to manage the streams, but leaves old semantics untouched.
- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
I prefer using Flask with Python because:
1. it is faster to setup the application 
2. python syntax is easier and requires less coding
3. availability of Flask-SQLAlchemy extension