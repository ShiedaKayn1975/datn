import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Divider,
  Typography, ClickAwayListener
} from '@mui/material'

const instance = {}

const Transition = (direction = 'right') => {
  return React.forwardRef(function Transition(props, ref) {
    return <Slide direction={direction} ref={ref} {...props} />;
  })
}

export default class FormModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      config: {},
      loading: false
    }
  }

  componentDidMount() {
    instance.current = this
  }

  show(config) {
    this.setState({ open: true, config })
  }

  handleClose = () => {
    this.setState({ open: false, config: {} })
  }

  render() {
    const { open, config, loading } = this.state

    return (
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition(config.direction)}
          keepMounted
          onClose={this.handleClose}
          aria-describedby="alert-dialog"
          aria-labelledby="alert-dialog-title"
          sx={{
            zIndex: open ? 2000 : -1,
          }}
          maxWidth='sm'
          fullWidth
        >
          {
            config.title &&
            <DialogTitle id='alert-dialog-title'
              sx={{
                fontWeight: 'bold',
                fontSize: 16
              }}
            >
              {config.title}
            </DialogTitle>
          }
          <Divider />
          <DialogContent>
            {
              config.renderComponent &&
              config.renderComponent()
            }
          </DialogContent>
          <Divider />
          <DialogActions>
            <Button onClick={this.handleClose} variant='contained'>Submit</Button>
            <Button onClick={this.handleClose} sx={{marginRight: 2}} >Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

FormModal.show = (config) => {
  if (instance.current) {
    instance.current.show(config)
  }
}