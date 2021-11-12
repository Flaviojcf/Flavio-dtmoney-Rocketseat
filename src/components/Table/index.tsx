import { Container } from "./style";

export function Table () {
    return (
        <Container>
            <table>
                <thead>
                  <tr>
                     <th>Título</th>
                     <th>Valor</th>
                     <th>Categoria</th>
                     <th>Data</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>12/11/2021</td>
                    </tr>
                    <tr>
                        <td>Luz</td>
                        <td className="withdraw">-R$600,00</td>
                        <td>Casa</td>
                        <td>12/11/2021</td>
                    </tr>
                    
                    
                </tbody>
            </table>
        </Container>
    )
}