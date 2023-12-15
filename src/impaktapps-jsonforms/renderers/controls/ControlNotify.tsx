import { withJsonFormsControlProps } from '@jsonforms/react';
import Notify from '../components/Notify';

const ControlNotify = (props:any) => {
  
  return(
    <Notify 
    {...props}
   />)
  }

export default withJsonFormsControlProps(ControlNotify);