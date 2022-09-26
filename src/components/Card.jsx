import check from '../images/icon-check.svg'
import Select from './Select'

export default function Card(props) {

    return (
        <div className="container">
            <div className="head-container flex">
                <p className='viewers'>100K PAGEVIEWS</p>
                <div className="price-container flex">
                    <span>${props.values.discount}</span>
                    <p>/ month</p>
                </div>
            </div>
            <Select values={props.values}/>
            <div className="billings flex">
                <p>Monthly Billing</p>
                <div className="switch">
                    <input id="switch" type='checkbox'/>
                    <label for='switch' className="label"/>
                </div>
                <p>Yearly Billing</p>
                <p className="discount"><span className='span1'>-</span>25% <span className='span2'>discount</span></p>
            </div>
            <div className="separator"></div>
            <div className="trail flex">
                <div className="checkeds-container">
                    <div className='flex'>
                        <img alt='' src={check}/>
                        <p>Unlimited websites</p>
                    </div>
                    <div className='flex'>
                        <img alt='' src={check}/>
                        <p>100% data ownership</p>
                    </div>
                    <div className='flex'>
                        <img alt='' src={check}/>
                        <p>Email reports</p>
                    </div>
                </div>
                <button>Start my trial</button>
            </div>
        </div>
    )
}