export default function Table({
    title,
    description,
    columns,
    data
}) {
    return (
        <>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <table>
                <thead>
                    <tr className="row">
                        {
                            columns.map(column => {
                                return (
                                    <th key={`col_${column}`}>{column}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr key={`produto_${index}`} className="row">
                                    {
                                        columns.map(colName => {
                                            if (colName === 'custo') {
                                                return (
                                                    <td key={`produto_${colName}_col${index}`}>
                                                        {
                                                            new Intl.NumberFormat('pt-BR',  {
                                                                style: 'currency',
                                                                currency: 'BRL'
                                                            }).format(item[colName])
                                                        }
                                                    </td>
                                                )
                                            } else {
                                                return (
                                                    <td key={`produto_${colName}_col${index}`}>
                                                        {
                                                            item[colName]
                                                        }
                                                    </td>
                                                )
                                            }
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}