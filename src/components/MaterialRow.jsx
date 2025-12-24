
const MaterialRow = ({material}) => {
    return (
    <tr>
        <td>{material.name}</td>
        <td>{material.dilution}</td>
        <td>{material.grams}</td>
        <td>{material.percent_concentrate}</td>
        <td>{material.percent_total}</td>
        <td>{material.note}</td>
    </tr>
    )
}

export default MaterialRow