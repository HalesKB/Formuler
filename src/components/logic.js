export const Logic = {
    // returns the total grammage of the formula including ethanol and whatever else
    totalGrammage: (materials, addedEthanol) => {
        let total = 0
        materials.forEach(material => {
            total += material.grams
        });
        return total + addedEthanol;
    },

    // returns the grammage of the concentrate of all materials currently in formula
    concentrateGrammage: (materials) => {
        let total = 0
        materials.forEach(material => {
            total += material.grams * (material.dilution / 100)  // dilution is written as a number from 1 to 100
        });
        return total;
    },

    // returns the percentage of a particular material in the concentrate (ignores all ethanol)
    percentConcentrate: (material, concentrateGrammage) => {
        return (material.grams * (material.dilution / 100)) / concentrateGrammage;
    },

    // returns the percent of the total grammage taken up by a particular dilution (both the material and ethanol)
    percentTotal: (material, totalGrammage) => {
        return material.grams / totalGrammage;
    },    
};

export default Logic;