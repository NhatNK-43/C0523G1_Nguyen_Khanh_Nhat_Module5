import {Form, Field, Formik, ErrorMessage} from "formik";
import * as Yup from "yup"

export function FormMedical(){
    const initValue = {
        name: "",
        // email: "",
        // phone: "",
        // message: ""
    };
    const validateObject = {
        name: Yup.string()
            .required(),
        // email: Yup.string()
        //     .required()
        //     .matches( /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,"The email entered is invalid!"),
        // phone: Yup.string()
        //     .required()
        //     .matches(/^0\\d{9}$/,"The phone number entered is invalid!")
    }
    return(
        <>
            <Formik
                initialValues={initValue}
                onSubmit={values => {
                }}
                validationSchema={Yup.object(validateObject)}
            >
                <div className="w-25 m-auto">
                    <Form>
                        <h3>Tờ khai y tế</h3>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="name">Họ và tên</label>
                            <Field type="text" className="form-control" id="name" name="name"/>
                            <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="idCard">Số hộ chiếu/CMND</label>
                            <Field type="text" className="form-control" id="idCard" name="idCard"/>
                            <ErrorMessage name="idCard" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="dateOfBirth">Ngày sinh</label>
                            <Field type="text" className="form-control" id="dateOfBirth" name="dateOfBirth"/>
                            <ErrorMessage name="dateOfBirth" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <div className="form-check-inline">Giới tính</div>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" name="gender"
                                       id="inlineRadio1"
                                       value="1"/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Nam</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" name="gender"
                                       id="inlineRadio2"
                                       value="0"/>
                                <label className="form-check-label" htmlFor="inlineRadio2">Nữ</label>
                            </div>
                            <ErrorMessage name="gender" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="nationality">Quốc tịch</label>
                            <Field type="text" className="form-control" id="nationality" name="nationality"/>
                            <ErrorMessage name="nationality" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="company">Công ty làm việc</label>
                            <Field type="text" className="form-control" id="company" name="company"/>
                            <ErrorMessage name="company" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="department">Bộ phận làm việc</label>
                            <Field type="text" className="form-control" id="department" name="department"/>
                            <ErrorMessage name="department" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3 form-check">
                                <Field type="checkbox" className="form-check-input" id="healthInsurance" name="healthInsurance"/>
                                <label className="form-check-label" htmlFor="healthInsurance">Bảo hiểm y tế</label>
                                <ErrorMessage name="healthInsurance" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <h5>Địa chỉ liên lạc tại Việt Nam</h5>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="city">Tỉnh thành</label>
                            <Field type="text" className="form-control" id="city" name="city"/>
                            <ErrorMessage name="city" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="district">Quận /huyện </label>
                            <Field type="text" className="form-control" id="district" name="district"/>
                            <ErrorMessage name="district" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="ward">Phường /xã </label>
                            <Field type="text" className="form-control" id="ward" name="ward"/>
                            <ErrorMessage name="ward" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="houseNumber">Số nhà, phố, tổ dân phố /thôn /đội </label>
                            <Field type="text" className="form-control" id="houseNumber" name="houseNumber"/>
                            <ErrorMessage name="houseNumber" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="phoneNumber">Điện thoại</label>
                            <Field type="text" className="form-control" id="phoneNumber" name="phoneNumber"/>
                            <ErrorMessage name="phoneNumber" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mt-3">
                            <label className="label-control" htmlFor="email">Email</label>
                            <Field type="text" className="form-control" id="email" name="email"/>
                            <ErrorMessage name="email" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>

                        <div className="mt-3">
                            <label className="label-control" htmlFor="movingHistory">
                                <h5>Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia /vùng lãnh thổ nào không?
                                (Có thể đi qua nhiều quốc gia)</h5>
                            </label>
                            <Field type="textarea" className="form-control" id="movingHistory" name="movingHistory"/>
                            <ErrorMessage name="movingHistory" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>

                        <div className="mt-3">
                            <label className="label-control">
                                <h5>Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu nào sau đây không?</h5>
                            </label>
                            <div className="form-check">
                                <Field type="checkbox" className="form-check-input" id="fever" name="fever"/>
                                <label className="form-check-label" htmlFor="fever">Sốt</label>
                                <ErrorMessage name="fever" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mt-3 form-check">
                                <Field type="checkbox" className="form-check-input" id="cough" name="cough"/>
                                <label className="form-check-label" htmlFor="cough">Ho</label>
                                <ErrorMessage name="cough" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mt-3 form-check">
                                <Field type="checkbox" className="form-check-input" id="shortnessOfBreath" name="shortnessOfBreath"/>
                                <label className="form-check-label" htmlFor="shortnessOfBreath">Khó thở</label>
                                <ErrorMessage name="shortnessOfBreath" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mt-3 form-check">
                                <Field type="checkbox" className="form-check-input" id="pneumonia" name="pneumonia"/>
                                <label className="form-check-label" htmlFor="pneumonia">Viêm phổi</label>
                                <ErrorMessage name="pneumonia" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mt-3 form-check">
                                <Field type="checkbox" className="form-check-input" id="soreThroat" name="soreThroat"/>
                                <label className="form-check-label" htmlFor="soreThroat">Đau họng</label>
                                <ErrorMessage name="soreThroat" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                            <div className="mt-3 form-check">
                                <Field type="checkbox" className="form-check-input" id="tired" name="tired"/>
                                <label className="form-check-label" htmlFor="tired">Mệt mỏi</label>
                                <ErrorMessage name="tired" component="span" style={{color: "red"}}></ErrorMessage>
                            </div>
                        </div>

                        <div className="mt-3">
                            <label className="label-control">
                                <h5>Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với?</h5>
                            </label>
                            <div className="form-check">
                                <Field type="checkbox" className="form-check-input" id="patient" name="patient"/>
                                <label className="form-check-label" htmlFor="patient">Người bệnh hoặc nghi ngờ mắc bệnh COVID-19</label>
                            </div>
                            <div className="mt-3 form-check">
                                <Field type="checkbox" className="form-check-input" id="epidemicArea" name="epidemicArea"/>
                                <label className="form-check-label" htmlFor="epidemicArea">Người từ nước có bệnh COVID-19</label>
                            </div>
                            <div className="mt-3 form-check">
                                <Field type="checkbox" className="form-check-input" id="symptoms" name="symptoms"/>
                                <label className="form-check-label" htmlFor="symptoms">
                                    Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)</label>
                            </div>
                        </div>

                        <div className="mt-3">
                            <button className="btn btn-primary btn-sm w-100" type="submit">Gửi</button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </>
    )
}