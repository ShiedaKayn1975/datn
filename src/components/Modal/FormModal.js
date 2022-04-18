import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Divider,
  Typography
} from '@mui/material'

const instance = {}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
})

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
    this.setState({ open: false })
  }

  render() {
    const { open, config, loading } = this.state
    return (
      <>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-describedby="alert-dialog"
          aria-labelledby="alert-dialog-title"
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
      </>
    )
  }
}

FormModal.show = (config) => {
  if (instance.current) {
    instance.current.show(config)
  }
}