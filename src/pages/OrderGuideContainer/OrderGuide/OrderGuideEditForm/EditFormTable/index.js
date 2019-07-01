import React from 'react'
import { IconContainer } from './styles'
import { TableContainer } from '../../styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { H4, P } from '../../../../../styles/fonts'
import { Icon } from '../../../../../styles/elements'
import { Flex } from '../../../../../styles/layout'
import isEqual from 'lodash/isEqual'

export const DAY_ABBREVIATIONS = {
  monday: 'MON',
  tuesday: 'TUES',
  wednesday: 'WED',
  thursday: 'THURS',
  friday: 'FRI',
  saturday: 'SAT',
  sunday: 'SUN',
}

class EditFormTable extends React.Component {
  getDeliveryDayLabel = deliveryDays => {
    const days = Object.keys(deliveryDays)
    return days.reduce((currentString, day, i) => {
      return currentString + DAY_ABBREVIATIONS[day] + `${!isEqual(i + 1, days.length) ? '/' : ''}`
    }, '')
  }

  render () {
    const { 
      products,
      updateQuantity,
      removeProduct,
    } = this.props

    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><H4 black={true}>PRODUCT</H4></TableCell>
              <TableCell><H4 black={true}>DEFAULT VOLUME</H4></TableCell>
              <TableCell><H4 black={true}>DELIVERY DAYS</H4></TableCell>
              <TableCell><H4 black={true}>DELETE</H4></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, i) => {
              return (
                <TableRow key={`product--${i}`}>
                  <TableCell>
                    <P black={true}>{product.name}</P>
                  </TableCell>
                  <TableCell>
                    <Flex row={true}>
                      <IconContainer onClick={() => updateQuantity('remove', product._id)}>
                        <Icon size={`10px`} absolute={'true'}>remove</Icon>
                      </IconContainer>
                      {`${product.currentVolume}/${product.unitQuantity.toUpperCase()}`}
                      <IconContainer onClick={() => updateQuantity('add', product._id)}>
                        <Icon size={`10px`} absolute={'true'}>add</Icon>
                      </IconContainer>
                    </Flex>
                  </TableCell>
                  <TableCell>
                    <P black={true}>{this.getDeliveryDayLabel(product.deliveryDays)}</P>
                  </TableCell>
                  <TableCell>
                    <Icon error={'true'} onClick={() => removeProduct(product)}>delete_outline</Icon>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
          </Table>
      </TableContainer>
    )
  }
}

export default EditFormTable