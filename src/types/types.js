// Define the numerical type behaviours
export const defineAspects = (type, { dimensions, species }) => {

  // Set the dimensions
  Reflect.defineProperty(type, 'dimensions', {
    get() {
      return (dimensions) ? {
        rows: dimensions[0],
        columns: dimensions[1]
      } : {
        rows: 1,
        columns: 1
      };
    }
  });
    
  // Define the species
  Reflect.defineProperty(type, 'species', {
    get() {
      return (species) ? species : 'Numerical';
    }
  });

  // Define the type string (rows x columns)
  Reflect.defineProperty(type, 'type', {
    get() {
      return `${this.species}(${this.dimensions.rows}x${this.dimensions.columns})`;
    }
  });

  // Define the rows
  Reflect.defineProperty(type, 'rows', {
    get() {
      // Define the number of rows and columns
      const r = this.dimensions.rows;
      const c = this.dimensions.columns;

      // Define the resulting rows
      const rows = [];

      // Iterate from 0 to r rows
      for (let i = 0; i < r; i++) {

        // Create a numerical from the row data
        const row = this.filter((v, j) => (j >= (c * i)) && (j < (c * (i + 1))));
          
        // Add the row to the rows
        rows.push(row);
      }

      // Return the resulting rows
      return rows;
    }
  });

  // Define the columns
  Reflect.defineProperty(type, 'columns', {
    get() {
      // Define the number of columns
      const c = this.dimensions.columns;

      // Define the resulting columns
      const columns = [];
    
      // Iterate from 0 to c columns
      for (let i = 0; i < c; i++) {
    
        // Create a numerical from the column data
        const column = this.filter((v, j) => j % c == i);
          
        // Add the column to the columns
        columns.push(column);
      }
    
      // Return the resulting columns
      return columns;
    }
  });

  // Define the value types from a to z
  for (let i = 0; i < type.length; i++) {

    // Define the key value
    const key = String.fromCharCode(97 + i);

    // Define the getter and setter
    Reflect.defineProperty(type, key, {
      get() {
        return this[i];
      },
      set(v) {
        this[i] = v;
      }
    });
  }

  // Define the toString function
  Reflect.defineProperty(type, 'toString', {
    value() {
      // Return the string
      return `\n${this.type}\n|${this.rows.join('|\n|')}|\n`;
    }
  });

  // Define the equals function to compare
  Reflect.defineProperty(type, 'equals', {
    value(other) {
      // Return if true
      return (this.toString() == other.toString());
    }
  });

};