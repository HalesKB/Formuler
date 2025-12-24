import MaterialRow from './MaterialRow';
// useState?

// fixture
materials = [
    {
        id: 1,
        name: "Eugenol",
        dilution: 10,
        grams: 1.00,
        note: "This is spicy"
    }
    {
        id: 2,
        name: "Veramoss",
        dilution: 20,
        grams: 0.050,
        note: "This is mossy"
    }
]

const Formula = ({materials}) => {
    materials.map((material) => {
        <MaterialRow /> // not yet figured out the logic        
    })
}

export default Formula