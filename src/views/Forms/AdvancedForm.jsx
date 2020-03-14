import React, { Component } from 'react';
import { advanced_form as data } from 'data.js';
import { TimePicker, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import InputMask from 'react-input-mask';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';
import { SketchPicker } from 'react-color'
import ReactPasswordStrength from 'react-password-strength';
import CurrencyInput from 'react-currency-input';
export default class AdvancedForm extends Component {
    state = {
        timePicker: moment('00:00:00', 'HH:mm:ss'),
        background: '#fff',
        amount: "0.00"
    }
    handleTimePicker = (time, timeString) => {
        this.setState({
            timePicker: time
        })
    }
    handleColorPicker = color => {
        this.setState({ background: color.hex });
    }
    handleCurrencyInput = (event, maskedvalue, floatvalue) => {
        this.setState({ amount: maskedvalue });
    }
    render() {
        const { RangePicker } = DatePicker;
        return (
            <React.Fragment>
                <h2 className="section-title">Advanced Forms</h2>
                <p className="section-lead">We provide advanced input fields, such as date picker, color picker, and so on.</p>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Input Text</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Default Input Text</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <p className="text-muted">*below is using react-input-mask, full documentation <a href="https://www.npmjs.com/package/react-input-mask">here</a></p>
                                <div className="form-group">
                                    <label>Phone Number (US Format)</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-phone"></i>
                                            </div>
                                        </div>
                                        <InputMask className="form-control" maskChar=" " mask="999 999 999 999" />

                                    </div>
                                </div>
                                <p className="text-muted">*below is using react-password-strength, full documentation <a href="https://www.npmjs.com/package/react-password-strength">here</a></p>
                                <div className="form-group">
                                    <label>Password Strength</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-lock"></i>
                                            </div>
                                        </div>
                                        <ReactPasswordStrength
                                            className="form-group w-75"
                                            minLength={6}
                                            inputProps={{
                                                placeholder: "Try a password...",
                                                className: 'form-control',
                                            }}
                                        />
                                    </div>
                                </div>
                                <p className="text-muted">*below is using react-currency-input, full documentation <a href="https://www.npmjs.com/package/react-currency-input">here</a></p>
                                <div className="form-group">
                                    <label>Currency</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                $
                                            </div>
                                        </div>
                                        <CurrencyInput className="form-control" value={this.state.amount} onChangeEvent={this.handleCurrencyInput} />
                                    </div>
                                </div>
                                <p className="text-muted">*below is using react-input-mask, full documentation <a href="https://www.npmjs.com/package/react-input-mask">here</a></p>
                                <div className="form-group">
                                    <label>Purchase Code</label>
                                    <InputMask type="text" className="form-control purchase-code" maskChar=" " mask="aaaa-aaaa-aaaa-aaaa" placeholder="ASDF-GHIJ-KLMN-OPQR" />
                                </div>
                                <div className="form-group">
                                    <label>Invoice</label>
                                    <input type="text" className="form-control invoice-input" />
                                </div>
                                <div className="form-group">
                                    <label>Date</label>
                                    <InputMask type="text" className="form-control datemask" alwaysShowMask={false} placeholder="YYYY/MM/DD" maskChar=" " mask="9999/99/99" />
                                </div>
                                <div className="form-group">
                                    <label>Credit Card</label>
                                    <input type="text" className="form-control creditcard" />
                                </div>
                                <p className="text-muted">*below is using react-select, full documentation <a href="https://react-select.com/">here</a></p>
                                <div className="form-group">
                                    <label>Tags</label>
                                    <CreatableSelect options={[]} isMulti />
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h4>Toggle Switches</h4>
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <div class="control-label">Toggle switches</div>
                                    <div class="custom-switches-stacked mt-2">
                                        {data.options.map(option => (
                                            <label class="custom-switch">
                                                <input type="radio" name="option" value={option.value} class="custom-switch-input" />
                                                <span class="custom-switch-indicator"></span>
                                                <span class="custom-switch-description">{option.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="control-label">Toggle switch single</div>
                                    <label class="custom-switch mt-2">
                                        <input type="checkbox" name="custom-switch-checkbox" class="custom-switch-input" />
                                        <span class="custom-switch-indicator"></span>
                                        <span class="custom-switch-description">I agree with terms and conditions</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h4>Image Check</h4>
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <label class="form-label">Image Check</label>
                                    <div class="row gutters-sm">
                                        {data.images.map(image => (
                                            <div class="col-6 col-sm-4">
                                                <label class="imagecheck mb-4">
                                                    <input name="imagecheck" type="checkbox" value={image.value} class="imagecheck-input" />
                                                    <figure class="imagecheck-figure">
                                                        <img src={require(`assets/img/news/${image.image}`)} alt="}" class="imagecheck-image" />
                                                    </figure>
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Select</h4>
                            </div>
                            <div className="card-body">
                                <div className="section-title mt-0">Default</div>
                                <div className="form-group">
                                    <label>Default Select</label>
                                    <select className="form-control">
                                        {data.options.map(option => (<option value={option.value}>{option.label}</option>))}
                                    </select>
                                </div>
                                <div className="section-title">react-select</div>
                                <p className="text-muted">*Full documentation can be found <a href="https://react-select.com/">here</a></p>
                                <div className="form-group">
                                    <label>react-select searchable single option</label>
                                    <Select isSearchable={true} options={data.options} />
                                </div>
                                <div className="form-group">
                                    <label>react-select searchable multi option</label>
                                    <Select isSearchable={true} isMulti options={data.options} />
                                </div>
                                <div className="section-title">Select Group Button</div>
                                <div className="form-group">
                                    <label className="form-label">Size</label>
                                    <div className="selectgroup w-100">
                                        {data.sizes.map(size => (
                                            <label className="selectgroup-item">
                                                <input type="radio" name="value" value={size.value} className="selectgroup-input" />
                                                <span className="selectgroup-button">{size.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Icons input</label>
                                    <div className="selectgroup w-100">
                                        {data.icons.map(icon => (
                                            <label className="selectgroup-item">
                                                <input type="radio" name="transportation" value={icon.value} className="selectgroup-input" />
                                                <span className="selectgroup-button selectgroup-button-icon"><i className={icon.icon}></i></span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Icon input</label>
                                    <div className="selectgroup selectgroup-pills">
                                        {data.icons_circle.map(icon => (
                                            <label className="selectgroup-item">
                                                <input type="radio" name="icon-input" value={icon.value} className="selectgroup-input" />
                                                <span className="selectgroup-button selectgroup-button-icon"><i className={icon.icon}></i></span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Your skills</label>
                                    <div className="selectgroup selectgroup-pills">
                                        {data.skills.map(skill => (
                                            <label className="selectgroup-item">
                                                <input type="checkbox" name="value" value={skill.value} className="selectgroup-input" />
                                                <span className="selectgroup-button">{skill.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h4>Date &amp; Time Picker</h4>
                            </div>
                            <div className="card-body">
                                <p className="text-muted">We are using Ant-Design <a href="https://ant.design/components/date-picker/">Date Picker</a> and <a href="https://ant.design/components/date-picker/">Time Picker</a></p>
                                <div className="form-group">
                                    <label>Date Picker</label>
                                    <DatePicker className="form-control" value={this.state.timePicker} onChange={this.handleTimePicker} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                                </div>
                                <div className="form-group">
                                    <label>Date Time Picker</label>
                                    <DatePicker className="form-control" showTime value={this.state.timePicker} onChange={this.handleTimePicker} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                                </div>
                                <div className="form-group">
                                    <label>Date Range Picker</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-calendar"></i>
                                            </div>
                                        </div>
                                        <RangePicker className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Time Picker</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-clock"></i>
                                            </div>
                                        </div>
                                        <TimePicker className="form-control" value={this.state.timePicker} onChange={this.handleTimePicker} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h4>Color</h4>
                            </div>
                            <div class="card-body">
                                <p className="text-muted">See <a href="https://casesandberg.github.io/react-color/">react-color</a> for the documentation</p>
                                <div class="form-group">
                                    <label>Sketch Style</label>
                                    <SketchPicker color={this.state.background} onChangeComplete={this.handleColorPicker} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
