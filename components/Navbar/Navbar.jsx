import styles from './navbar.module.css';
import Image from 'next/image';
import logo from '../../public/codersartsLogo.png';
import Link from 'next/link';

function Navbar () {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo__area}>
        <Link href="/">
          <a>
            <Image
              src={logo}
              alt={'logo'}
              width={'50px'}
              height={'50px'}
              placeholder="blur"
              priority
            />
          </a>
        </Link>

        <div className={styles.logo__text}>
          <Link href="/">
            <a style={{color: 'black'}}>
              <h4>Codersarts</h4>
              <small>Projects</small>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.link__area}>
        <div className="dropdown mx-2">
          <div
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Find Projects
          </div>
          <ul
            className={`dropdown-menu ${styles.dropdown__menu}`}
            style={{width: 'max-content'}}
            aria-labelledby="dropdownMenuButton1"
          >
            <div className="d-flex" style={{width: '50vw'}}>
              <div className={styles.dropdown__menu__col}>
                <li>
                  <Link href="/projects/Html_css">
                    <a className="dropdown-item">HTML/CSS</a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects/Reactjs">
                    <a className="dropdown-item">React</a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects/DataScience">
                    <a className="dropdown-item">Data Science</a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects/Swift">
                    <a className="dropdown-item">Swift Projects</a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects/PHP">
                    <a className="dropdown-item">PHP Projects</a>
                  </Link>
                </li>
              </div>
              <div className={styles.dropdown__menu__col}>
                <li>
                  <Link href="/projects/Nodejs">
                    <a className="dropdown-item">Nodejs</a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects/AndroidDevelopment">
                    <a className="dropdown-item">Android Development</a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects/NLP">
                    <a className="dropdown-item">Natural Language Processing</a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects/ReactNative">
                    <a className="dropdown-item">React Native</a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects/Python">
                    <a className="dropdown-item">Python Projects</a>
                  </Link>
                </li>
              </div>
              <div className={styles.dropdown__menu__col}>
                <li>
                  <Link href="/projects/DeepLearning">
                    <a className="dropdown-item">Deep Learning</a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects/IOS">
                    <a className="dropdown-item">IOS Development</a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects/Java">
                    <a className="dropdown-item">Java Projects</a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects/Angular">
                    <a className="dropdown-item">Angular.js</a>
                  </Link>
                </li>
              </div>

            </div>
            <div className={styles.dropdown__bottom__link}>
              <Link href="/all-projects">
                <a className="dropdown-item">See All Projects</a>
              </Link>
            </div>
          </ul>
        </div>
        <div className="dropdown mx-2">
          <div
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Other Services
          </div>
          <ul
            className={`dropdown-menu ${styles.dropdown__menu}`}
            aria-labelledby="dropdownMenuButton2"
          >
            <div className="d-flex">
              <div>
                <li>
                  <Link href="https://www.codersarts.com/android-development">
                    <a className="dropdown-item">
                      <h5>Mobile App development </h5>
                      <small>Make mobile helps easily</small>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="https://www.codersarts.com/web-development">
                    <a className="dropdown-item">
                      <h5>Web Development</h5>
                      <small>Get web application services quickly</small>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="https://www.codersarts.com/javascript-development">
                    <a className="dropdown-item">
                      <h5>Javascript Development</h5>
                      <small>Get Javascript Services quickly</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.codersarts.com/computer-science-assignment-portal">
                    <a className="dropdown-item">
                      <h5>Programming Help</h5>
                      <small>Get Programming Help easily</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.codersarts.com/database-assignment-help">
                    <a className="dropdown-item">
                      <h5>Database Development</h5>
                      <small>Know how to work with database</small>
                    </a>
                  </Link>
                </li>
              </div>
              <div>
                <li>
                  <Link href="https://www.codersarts.com/python-assignment-help">
                    <a className="dropdown-item">
                      <h5>Python Programming Help</h5>
                      <small>Get any type of assignment help easily</small>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="https://www.codersarts.com/java-assignment-help">
                    <a className="dropdown-item">
                      <h5>Java Assignment Help</h5>
                      <small>Get any type of assignment help easily</small>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="https://www.codersarts.com/csharp-assignment-help">
                    <a className="dropdown-item">
                      <h5>C# Assignment Help</h5>
                      <small>Get any type of assignment help easily</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.codersarts.com/mongodb-assignment-help">
                    <a className="dropdown-item">
                      <h5>Mongodb Assignment Help</h5>
                      <small>Get any type of assignment help easily</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.codersarts.com/android-app-assignment-help">
                    <a className="dropdown-item">
                      <h5>Android Assignment Help</h5>
                      <small>Get any type of assignment help easily</small>
                    </a>
                  </Link>
                </li>
              </div>

              <div>
                <li>
                  <Link href="https://www.codersarts.com/android-development">
                    <a className="dropdown-item">
                      <h5>Mobile Development Help</h5>
                      <small>Get any type of assignment help easily</small>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="https://www.codersarts.com/iphone-application-development">
                    <a className="dropdown-item">
                      <h5>iPhone Development Help</h5>
                      <small>Get any type of assignment help easily</small>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="https://www.codersarts.com/react-native-app-development">
                    <a className="dropdown-item">
                      <h5>ReactNative Development Help</h5>
                      <small>Get any type of assignment help easily</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.codersarts.com/flutter-app-development">
                    <a className="dropdown-item">
                      <h5>Flutter Development Help</h5>
                      <small>Get any type of assignment help easily</small>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.codersarts.com/android-application-development">
                    <a className="dropdown-item">
                      <h5>Android App Development Help</h5>
                      <small>Get any type of assignment help easily</small>
                    </a>
                  </Link>
                </li>
              </div>

            </div>
          </ul>
        </div>

        {/* <div className={styles.link__item}>
                <Link href="/">
                    <a>Other Services</a>
                </Link>
            </div> */}
        <div className={styles.link__item}>
          <a
            href="https://dashboard.codersarts.com/get-help"
            target={'_blank'}
            className="primaryBtn"
            style={{padding: '6px 10px', fontSize: '0.9rem'}}
            rel="noreferrer"
          >
            Get Help Now
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
