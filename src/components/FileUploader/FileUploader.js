import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { CssConstant } from '../../assets/constant/constant'
import { makeStyles } from '@mui/styles'
import { Divider, useTheme } from '@mui/material'

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


const Preview = (props) => {
  return (
    <>
      {
        props.files.map((file, index) => (
          <div style={thumb} key={`thumb-${index}`}>
            <div style={thumbInner} key={`thumb-inner-${index}`}>
              <img
                src={file}
                style={img}
                key={`file-${index}`}
              />
            </div>
          </div>
        ))
      }
    </>
  )
}

const FileUploader = (props) => {
  const { preview } = props
  const useStyles = makeStyles(CssConstant)
  const classes = useStyles()
  const theme = useTheme()

  const [files, setFiles] = useState([])

  const onDrop = (acceptedFiles, rejectedFiles, event) => {
    // console.log(acceptedFiles)
    // console.log(rejectedFiles)
    // console.log(event)
    setFiles([...files.concat(acceptedFiles.map(item => URL.createObjectURL(item)))])
  }

  return (
    <>
      <Dropzone onDrop={onDrop}
        accept={[".png", ".jpg", ".gif", ".jpeg"]}
      >
        {({ getRootProps, getInputProps }) => (
          <section className="container"
            style={{ minWidth: '30vw' }}
          >
            <div {...getRootProps()} className={classes.dropzone}
              style={{
                outline: theme.palette.primary.main,
                borderColor: theme.palette.secondary.main,
                cursor: 'pointer',
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                }
              }}
            >
              <input {...getInputProps()} />
              <p style={{ marginLeft: 10 }}>Click to select files</p>
            </div>
            {
              preview && files.length > 0 &&
              <div>
                <Divider />
                <aside style={thumbsContainer}>
                  <Preview
                    files={files}
                  />
                </aside>
              </div>
            }
          </section>
        )}
      </Dropzone>
    </>
  )
}

export default FileUploader