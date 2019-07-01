import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { TableContainer } from '../styles'
import { H4, P } from '../../../../styles/fonts'
import isEqual from 'lodash/isEqual'

class OrderGuideTable extends React.Component {
  render() {
    const { products } = this.props
    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><H4>PRODUCT</H4></TableCell>
              <TableCell><H4>PRICE</H4></TableCell>
              <TableCell><H4>QUANTITY</H4></TableCell>
              <TableCell><H4>LEAD TIME</H4></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, i) => {
              return (
                <TableRow key={`product--${i}`}>
                  <TableCell><P>{product.name}</P></TableCell>
                  <TableCell><P>{`$${product.purchasePrice}/${product.unitQuantity.toUpperCase()}`}</P></TableCell>
                  <TableCell>
                    <P>{isEqual(product.currentVolume, 0) ? 'SKIP' : product.currentVolume + product.unitQuantity.toUpperCase()}</P>
                  </TableCell>
                  <TableCell><P>{`${product.leadTime} Days`}</P></TableCell>
                </TableRow>
              )
            })}
          </TableBody>
          </Table>
      </TableContainer>
    )
  }
}

export default OrderGuideTable
