import { ActionableExceptionHandler } from "./ActionableErrorHandler";
import { DefaultApiErrorHandler } from "./DefaultApiErrorHandler";

const formatterCurrentcy = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const customStyles = (error) => {
  return {
    control: (provided, state) => ({
      ...provided,
      border: error ? '1px solid #fd5749' : '1px solid rgba(0,0,0,.4)',
      backgroundColor: 'transparent !important',
      height: '50px !important',
      minHeight: '40px !important',
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: "none"
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: 'rgba(0, 0, 0, 0.38)',
      fontSize: '14px',
      whiteSpace: "nowrap"
    }),
    menuList: (provided, state) => ({
      ...provided,
      maxHeight: 150
    }),
    menu: (provided, state) => ({
      // none of react-select's styles are passed to <Control />
      // width: 200,
      ...provided,
      zIndex: 10000
      // bottom: "100%",
      // top: "auto",
    })
  }
}

const makeId = (length) => {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const statusLabelMapper = {
  cancelled: '#ffab91',
  waiting: '#ffe57f',
  active: '#00e676',
  finished: '#673ab7'
}

export {
  ActionableExceptionHandler,
  DefaultApiErrorHandler, 
  customStyles,
  makeId,
  statusLabelMapper,
  formatterCurrentcy
}