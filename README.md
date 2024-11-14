# Berlin Clock

## **Team Members**

- **Helalouch Aymane**:
- **Sarii El Mouchik Nabil**:
- **Sezer Mesut**

## **Project Description**

This project involves implementing a version of the **Berlin Clock** using JavaScript, following the principles of **Test-Driven Development (TDD)** with the **Jasmine** testing framework.

## **How the Berlin Clock Works**
The Berlin Clock consists of five rows of lights that represent the seconds, hours, and minutes. Each row has its own function and display format:

### **Seconds Lamp (Top of the clock)**
- 1 circular yellow lamp located at the top of the clock.
The lamp is on for even seconds and off for odd seconds.

### **5-Hour Blocks (First Row)** 
- 4 red lamps in the first row.
Each lamp represents 5 hours. The row can display up to 20 hours (4 lamps * 5 hours).

### **Single Hours (Second Row)**
- 4 red lamps in the second row.
Each lamp represents 1 hour (to complete the remaining hours after the 5-hour blocks).

### **5-Minute Blocks (Third Row)**
- 11 lamps in the third row, with a pattern of 9 yellow and 2 red lamps.
Each lamp represents 5 minutes.
Every 3rd lamp is red to indicate quarter-hours (15, 30, and 45 minutes), while the other lamps are yellow.

### **Single Minutes (Fourth Row)**
- 4 yellow lamps in the fourth row.
Each lamp represents 1 minute (to complete the remaining minutes after the 5-minute blocks).

  
## **Installation Instructions**
1. **Clone the project repository**:
   git clone https://github.com/Szr04/Berlin_clock.git
2. **Navigate to the project directory**:
   cd Berlin_clock
3. **Install dependencies (for testing)**:
   npm install jasmine
4. **To execute the tests and verifiy each component of the Berlin Clock**:
   npx jasmine 
   OR
   npm run test
