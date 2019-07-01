import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { TableContainer, Container, SelectedDayContainer, IconContainer } from './styles'
import { H4, H2, P } from '../../../styles/fonts'
import { Icon } from '../../../styles/elements'
import { Flex } from '../../../styles/layout'

class PlaceOrderTable extends React.Component {
  render () {
    const { products, orderTotal } = this.props
    return (
      <Container>
        <H2 bold={true} primary={true}>Review Cart</H2>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><H4>NAME</H4></TableCell>
                <TableCell><H4>PRICE</H4></TableCell>
                <TableCell><H4>QTY</H4></TableCell>
                <TableCell><H4>DELIVERY REQUEST</H4></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product, i) => {
                console.log('product -->', product)
                return (
                  <TableRow key={`product--${i}`}>
                    <TableCell><P>{product.name}</P></TableCell>
                    <TableCell><P>${product.purchasePrice}</P></TableCell>
                    <TableCell>
                      <Flex row={true}>
                        <IconContainer onClick={() => {}}>
                          <Icon size={`10px`} absolute={'true'}>remove</Icon>
                        </IconContainer>
                        {product.currentVolume + product.unitQuantity.toUpperCase()}
                        <IconContainer onClick={() => {}}>
                          <Icon size={`10px`} absolute={'true'}>add</Icon>
                        </IconContainer>
                      </Flex>
                    </TableCell>
                    <TableCell>
                      <SelectedDayContainer>
                        <P black={true}>{product.selectedDay}</P>
                      </SelectedDayContainer>
                    </TableCell>
                    <TableCell><Icon error={'true'}>delete_outline</Icon></TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
            </Table>
        </TableContainer>

        <Flex spaceBetween={true}>
          <H4 bold={true} primary={true}>TOTAL</H4>
          <H4 bold={true} primary={true}>${orderTotal}</H4>
        </Flex>
      </Container>
    )
  }
}

export default PlaceOrderTable