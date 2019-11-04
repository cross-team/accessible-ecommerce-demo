# Data Generator

This is a use-case specific data generator for creating sets of products in CSV format with randomized parameters.

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

Run the following command to install the dependencies. You may have to `cd` into the `data-generator` directory if you're in the root of the Accessible eCommerce Demo project.

```sh
$ npm install
```

## Usage

To generate a new set of data, run the following command:

```sh
$ npm run generate -- -n40
```

### Arguments

`--` indicates the start of the arguments
`-n40` the `-n` argument is for the number of records you want to generate (40 in this example)

## Code

Feel free to dig into the code to change the output.

### Generator Options

There are configurable options for possible price ranges, discount percentage ranges, short description trunction limits and more in [generate-products.js](https://github.com/PublicisSapient/accessible-ecommerce-demo/data-generator/generate-products.js).

### Product Names

The names are generated by combining _descriptors_ with _types_. ie: "Drapey Blouse" or "Pleated Shirt". There are multiple Arrays used for this depending on the product type. Check them out in [product-parameters.js](https://github.com/PublicisSapient/accessible-ecommerce-demo/data-generator/product-parameters.js).

### Sizes and Colours

For our purposes, these values need to be Arrays of filter options. They are generated by randomly selecting between `2` and `optionsArray.length` options from the default list. Check them out in [product-parameters.js](https://github.com/PublicisSapient/accessible-ecommerce-demo/data-generator/product-parameters.js).

### Product Descriptions

The _Lorem Ipsum_ text for the product descriptions was pulled from [Hipster Ipsum](https://hipsum.co/). These have been put in the [descriptions text file](https://github.com/PublicisSapient/accessible-ecommerce-demo/data-generator/descriptions.txt) (one per line, no empty lines) for the node script to import into an Array. If the number of records exceeds the number of descriptions in the file, the script will loop back to the beginning of the descriptions Array automatically.
