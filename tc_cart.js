"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: 
   Date:   
   
   Filename: tc_cart.js
	
*/

// Define shopping cart item arrays
var item = [10582, 23015, 41807,10041]; // Example item names
var itemDescription = ["1975 Green Bay Packers Football (signed), Item 10582" , "Tom Landry 1955 Football Card (unsigned), Item 23015" , "1916 Army-Navy Game, Framed Photo (signed), Item 41807" , "Protective Card Sheets, Item 10041"]; // Example item descriptions
var itemPrice =  [149.93, 89.98, 334.93,22.67]; // Example item prices
var itemQty = [1, 1, 1,4]; // Example item quantities

var itemCost = 0; // Initialize item cost
var orderTotal = 0; // Initialize order total
var cartHTML = "<table border='1'><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

// Add column headers and loop through items
for (var i = 0; i < item.length; i++) {
  itemCost = itemPrice[i] * itemQty[i]; // Calculate item cost
  orderTotal += itemCost; // Add to order total

  // Add row for each item
  cartHTML += "<tr><td><img src='tc_item.png' alt='" + item[i] + "'></td><td>" + itemDescription[i] + "</td><td>$" + itemPrice[i] + "</td><td>" + itemQty[i] + "</td><td>$" + itemCost + "</td></tr>";
}

// Add row for subtotal
cartHTML += "<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>";

// Display cart data on the page
var elem = document.getElementById("cart");
elem.innerHTML = cartHTML;
