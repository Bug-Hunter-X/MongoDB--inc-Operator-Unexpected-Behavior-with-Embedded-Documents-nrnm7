# MongoDB $inc Operator Issue with Embedded Documents

This repository demonstrates an uncommon error related to using the `$inc` operator in MongoDB when working with embedded documents. The issue arises from an improper approach to updating fields within these embedded structures.

## Problem
The provided code snippet attempts to increment a `zipcode` field within an embedded `address` document.  However, if the `address` document doesn't already exist within the main document, the increment operation will fail to create it and silently not make any change to the database.

## Solution
The solution involves using the `$setOnInsert` operator along with `$inc` within a `$set` operator to conditionally set the `address` document if it doesn't exist before incrementing its `zipcode` field.

## Setup
1. Ensure you have MongoDB installed and running.
2. Clone this repository.
3. Create a MongoDB collection (e.g., `myCollection`).