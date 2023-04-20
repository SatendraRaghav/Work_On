# json_to_ui
This a act21 product low code platform, this new low code platform makes it easy to convert JSON data into a user interface. With this platform, you can create dynamic user interfaces quickly and easily.

The platform's intuitive interface allows you to easily upload your JSON data, and the platform will automatically generate a corresponding user interface. This means that you can focus on designing the user experience, without worrying about the underlying code.

The platform is highly customizable, giving you complete control over the look and feel of your user interface. You can choose from a wide range of pre-built UI components, including buttons, forms, tables, and more, and customize them to fit your specific needs.

In addition to its easy-to-use interface, the platform also includes a powerful code editor, allowing more advanced users to dive deeper into the underlying code and make customizations as needed.

Overall, your low code platform is a powerful tool for developers and designers alike, making it easy to create rich, dynamic user interfaces in a fraction of the time it would take using traditional coding methods.

#### Follow thsese steps to update in libary

## 1.clone this project
 
 git clone git@git.act21.io:products/json_to_ui.git
 ```
 #checkout to branch Library_Developing
  ```
  git checkout Library_Developing
 ``
## 2. Update library code now

## 3. Change package version in package.json file.

## 3.Run command - npm i

## 4 Run command - npm build

## push change to gitLab
 run commands:
  make sure you are at Library_Developing branch;
 ```
  1. git add .
  2. git commit -m "Your message"
  3. git push
 ```

## 5. Login to NPM Account
    ```
    username - act21_products
    password - act21_packages2811
```
## 5. Now run your command - npm publish


Now your change are update in your NPM package, now you can use your library with this all updates.

#### How to use library

## 1. Run command npm i json_to_ui

## 2. import App from json_to_ui
  import {App} from json_to_ui

## 3. use App in your project
  Three props are mendatory in App;
  <App UiSchemaJson={Your UiSchema object } SchemaJson={Your Schema obj} objFunc={your objFunc for logics} />;

##### Happy Hacking
