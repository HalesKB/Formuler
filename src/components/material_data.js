const material_data_array = [
    {
        id: 1,
        name: "Eugenol",
        dilution: 10,
        grams: 1.00,
        note: "This is spicy"
    },
    {
        id: 2,
        name: "Veramoss",
        dilution: 20,
        grams: 0.050,
        note: "This is mossy"
    },
        {
        id: 3,
        name: "Coumarin",
        dilution: 1,
        grams: 0.050,
        note: "This is lovely"
    }
]

export default material_data_array

// NOTE
// these two values were removed because they do not need to be stored -- they should be calculated
// when the formula is loaded with the dilution and grammage:
// percent_concentrate
// percent_total