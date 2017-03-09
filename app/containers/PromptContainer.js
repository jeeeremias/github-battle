import React from 'react'
import styles from '../styles/index'

const PromptContainer = ({route}) => (
    <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={styles.transparentBg}>
        <h1>{route.header}</h1>
        <div className='col-sm-12'>
            <form>
                <div className='form-group'>
                    <input
                        className='form-control'
                        placeholder='GitHub Username'
                        type='text'/>
                </div>
                <div className='form-group col-sm-4 col-sm-offset-4'>
                    <button
                        className='btn btn-block btn-success'
                        type='submit'>
                        Continue
                    </button>
                </div>
            </form>
        </div>
    </div>
);

export default PromptContainer;