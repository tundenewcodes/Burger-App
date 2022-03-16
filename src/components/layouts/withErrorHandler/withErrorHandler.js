import React,{useState, useEffect} from "react"
import Modal from "../../UI/Modal/Modal"
import Auxilary  from '../../hoc/auxilary'

const withErrorHandler = (WrappedComponent,axios) => {
    return (props) => {
        const [error, setError] = useState(null)
        useEffect(() => {
             
       axios.interceptors.request.use((req) => {
       setError(null)
        return req
      })
            axios.interceptors.response.use(res => res, error => {
         setError(error)
     }
        
      )
        })
        const errorConfirmedHandler =  () => {
           setError(null) 
        }
        
        return (
            <Auxilary>
                <Modal show={error}
                closeModal = {errorConfirmedHandler}>{ error ? error.message : null}</Modal>
            <WrappedComponent  {...props} />
          </Auxilary>
        )
    }
 
    }

   

//     componentWillUnmount() {
//       axios.interceptors.request.eject(this.reqInterceptor)
//       axios.interceptors.response.eject(this.resInterceptor)
//     }

//     errorConfirmedHandler = () => {
//       this.setState({ error: null })
//     }

//     render() {
//       return (
//         <Aux>
//           <Modal
//             show={this.state.error}
//             modalClosed={this.errorConfirmedHandler}
//           >
//             {this.state.error ? this.state.error.message : null}
//           </Modal>
//           <WrappedComponent {...this.props} />
//         </Aux>
//       )
//     }
//   }
// }

export default withErrorHandler
