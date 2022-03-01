import { component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer>
                <h4>Contact Me</h4>
                <section className='contact-info'>
                    <div id="email">
                        <i className="far fa-envelop"></i>
                        <div id="email">
                            <i className='far fa-envelop'></i>
                            ealisa818@gmail.com
                        </div>

                        <div id="linkedin">
                            <i className='far fa-envelop'></i>
                            <a href="https://www.linkedin.com/in/alisa-wolfram-17299a221/" target="_blank" rel='noreferrer'>GitHub</a>

                        </div>
                        <div id="github">
                            <i className='far fa-envelop'></i>
                            <a href="https://github.com/ealisa818" target="_blank" rel='noreferrer'>GitHub</a>
                        </div>
                    </div>
                </section>
            </footer>
        )
    }
};

export default Footer;