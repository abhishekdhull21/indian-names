
  

# Indian Names

  

Indian Names is a simple npm package that provides a collection of popular Indian names along with their meanings. It aims to assist developers in generating or accessing Indian names for various purposes, such as application development, data generation, or cultural research.

  

## Installation

  

You can install the `indian-names` package using npm:

  

```

npm  install  indian-names

```

  

## Usage

To use the functions provided by the `indian-names` package, require it as follows:

  ```
const indianName = require('indian-names');
```

### Generate a random name

To generate a random name, use the `generateRandomName()` function:

  
```
const randomName = indianName.generateRandomName();
```

The `generateRandomName()` function retrieves a random name from the internal list.

  

### Generate a random male name

To generate a random male name, use the generateMaleRandomName() function:

```
const maleName = indianName.generateMaleRandomName();
```


The `generateMaleRandomName()` function retrieves a random name from the internal list that is associated with the male gender.

  

### Generate a random female name

To generate a random female name, use the `generateFemaleRandomName()` function:

```
const femaleName = indianName.generateFemaleRandomName();
```

The `generateFemaleRandomName()` function retrieves a random name from the internal list that is associated with the female gender.

  

### Generate multiple random names

To generate multiple random names, use the `getManyNames()` function:
```
const names = indianName.getManyNames(10);
```

The getManyNames(size) function generates an array of size random names. By default, it generates 20 random names.

  

## Contributing

Contributions to the indian-names package are welcome! If you have suggestions, improvements, or want to add more features, please submit a pull request. Make sure to follow the existing coding style and add relevant tests.

  

### License

This package is licensed under the MIT License.

```
Please ensure that you customize the content further based on the specific functionality and features of the package.
```