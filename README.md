

## List of User Commands

Users can interact with the Parking Lot system via a following simple set of commands which produce a specific output:

- **create_parking_lot**: `create_parking_lot 6` will create a parking lot with 6 slots.

- **park < REGISTRATION NUMBER > < COLOR >**: `park AP_12345 White` will allocate the nearest slot from entry gate.

- **leave**: `leave 4` will make slot number 4 free.

- **status**: `status` will display cars and their slot details


- **registration_numbers_for_cars_with_colour < COLOR >**: `registration_numbers_for_cars_with_colour White` will display the registration number of the cars of white color e.g. `AP_12345, AP_1234567`

- **slot_numbers_for_cars_with_colour < COLOR >**: `slot_numbers_for_cars_with_colour White` will display slot numbers of the cars of white color e.g. `1, 3`

- **slot_number_for_registration_number < REGISTRATION NUMBER >**: `slot_number_for_registration_number AP_12345` will display the slot number for the car with registration number AP_12345.

- **leave_car_by_registration_number**: `leave_car_by_registration_number AP_12345` will free the slot occupied by car with registration number JAP_12345.

- **available_slot_numbers**: `available_slot_numbers` will display available slot numbers e.g. 2, 6, 8.

- **allocated_slot_numbers**: `allocated_slot_numbers` will display occupied slot numbers e.g. 1, 3, 4, 5, 7.

- **exit**: `exit` will quit the application and return to the console.

> **NOTE: Any commands which are not mentioned above will throw an error: `<INPUT> is an invalid command`**



