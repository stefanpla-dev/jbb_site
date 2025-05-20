import React, { useState } from 'react';
import '../styles/Section.css';

function Resume() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleResume = () => {
        setIsExpanded(prev => !prev);
    };


  return (
    <section className="resume-section" id="resume">
        <div className="resume-toggle">
            <button onClick={toggleResume} style={{ width: '500px', height: '50px', fontSize: '1.1rem' }}>
                {isExpanded ? '↑ Hide Resume ↑' : '↓ Click here for my full resume ↓'}
            </button>
        </div>

        <div className={`resume-content ${isExpanded ? 'expanded' : ''}`}>
            <div className="resume-column left">
            <div className="resume-text">
                <h2>Choral Experience</h2>
                <h2>Education</h2>
                <ul>
                    <li><strong>University of Arizona (2018-2020)</strong> - Master of Music in Choral Conducting</li>
                    <li><strong>The Ohio State University (2002-2006)</strong> - Bachelor of Music, Vocal Performance</li>
                </ul>
                <div className="experience-item">
                    <h3>*Recurring Responsibilities as Artistic Director*</h3>
                    <ul>
                    <li>Recruit new singers and hold semester auditions</li>
                    <li>Lead weekly rehearsals that focus on learning music, vocal technique
                    and musicality through exercises and interesting choral arrangements</li>
                    <li>Plan musical retreats that focus on advancing choral singing technique,
                    developing show concepts, learning choreography and building singer
                    bonds</li>
                    <li>Meet with creative production team to develop concert scripts, create
                    multimedia presentations for concerts and social media, and arrange for
                    creation of props and costumes for all performances</li>
                    <li>Work with Board of Directors on developing yearly budget for concerts
                    and outreach events</li>
                    <li>Meet with donors and continue to engage their participation in our fund-
                    ing and events for the year</li>
                    <li>Work with other community arts organizations to collaborate for con-
                    certs and outreach events</li>
                    <li>Supervise Accompanist, Hired Musicians, Choreographer and American
                    Sign Language Interpreters</li>
                    <li>Serve as spokesperson for the organization</li>
                    </ul>
                    <h3>Columbus Gay Men’s Chorus (2020-Present)</h3>
                    <p><strong>Artistic Director</strong></p>
                    <ul>
                    <li>Program annual holiday, spring, and summer concert focusing on
                    themes performed through classical, Broadway, pop, rock and other
                    various musical genres developing show concepts, learning
                    choreography and building singer bonds</li>
                    <li>Secure COVID safe rehearsal and performance venues</li>
                    <li>Research and instruct singers on healthy practices for choral singing during a pandemic</li>
                    <li>Led summer social media recruitment campaign that brought in 30 new
                    singers for the semester, compared to average of 14</li>
                    <li>Collaborated with Columbus Symphony, Opera Columbus, Huntington
                    Park (home of Columbus Clippers), William Brady Project Band,
                    Columbus Port Authority, Columbus Stonewall and Equitas Health on
                    community performances</li>
                    <li>Worked with Executive Director and Board of Trustees for a COVID
                    budget and to secure more annual funding from two major Ohio grant
                    sources</li>
                    <li>Grown singing membership from 120 active singers pre-pandemic to
                    150 active singers as of September 2021</li>
                    <li>Developed social media presence to be recognized and showcased on
                    local media and National “Best At Home Videos” program on CBS</li>
                    <li>Achieved record ticket sales for ABBA concert in June 2021</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h3>VOX (CGMC Auditioned Ensemble) (2020-Present)</h3>
                    <p><strong>Artistic Director</strong></p>
                    <ul>
                    <li>Program annual concert focusing on a theme that is performed through
                    classical, Broadway, pop, rock and other various musical genres</li>
                    <li>Develop outreach performances for Gay Softball World Series, Equitas
                    Health annual fundraiser, and Columbus Metropolitan Library</li>
                    <li>Partnered with Nina West for performance achieving record ticket sales
                    for an October 2020 performance</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h3>Illuminati (CMGC Sacred Ensemble) (2020-Present)</h3>
                    <p><strong>Artistic Director</strong></p>
                    <ul>
                    <li>Program spring concert that centers around sacred music from
                    Christianity, Judaism, and other religious music</li>
                    <li>Schedule and arrange monthly outreach performances with religious
                    congregations throughout Columbus and central Ohio</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h3>GALA BANNED Blockbuster Producer 2024</h3>
                    <p><strong>Artistic Director</strong></p>
                    <ul>
                    <li>Designed collaborative concert with seven diverse range of GALA
                    choruses</li>
                    <li>Worked with Theatre venue and technical staff to plan cues show flow</li>
                    <li>Provided guidance for other chorus directors in programmatic choices</li>
                    <li>Coordinated instrumentalists and singers</li>
                    <li>Arranged and Recruited Guest Performers, including Nina West</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h3>Big Apple Performing Arts/New York City Gay Men’s Chorus (2022)</h3>
                    <p><strong>Interim Artistic Director</strong></p>
                    <ul>
                    <li>Program Spring concert that utilizes singer’s song suggestions, develop
                    thematic storyline and work with chorus members to develop concert
                    script, choreography themes, choreography, and set and lighting design</li>
                    <li>Develop protocols with COVID Safety Team for rehearsal procedures,
                    Research and instruct Board and COVID Safety team on healthy
                    practices for choral singing during COVID</li>
                    <li>Collaborate with Membership team around auditions, engaging new
                    members, and continued support of returning members</li>
                    <li>Welcome and support 70 new singing members to the organization</li>
                    <li>Work with Executive Director on securing venues for rehearsals, current
                    performances, and ongoing performances</li>
                    <li>Develop 2022-2023 season concepts based on singer’s preferences</li>
                    <li>Help create graphics with graphic designer for upcoming concert and
                    2022-2023 season</li>
                    <li>Solidify and research outreach performances with Executive Director
                    that focus on financial growth and mission-based opportunities</li>
                    <li>Assist Youth PRIDE Chorus on recruitment and social media strategies,
                    performance opportunities, and provide ongoing support to YPC Artistic
                    Director as needed</li>
                    <li>Seek out BIPOC, gender nonconforming, and Spanish as first language
                    composers and arrangers to obtain new and exciting voices in choral
                    arrangements</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h3>Reveille Men's Chorus (2017-2019)</h3>
                    <p><strong>Artistic Director</strong></p>
                    <ul>
                    <li>Program one holiday concert, one spring concert and a joint collabora-
                    tion summer concert focusing on themes performed through classical,
                    Broadway, pop, rock and other various musical genres</li>
                    <li>Grew membership from 55 singers to 75 singers</li>
                    <li>Partnered with twelve local Tucson community choruses for community
                    choral festival</li>
                    <li>Partnered with Desert Voices community chorus to start “Them” Youth
                    Chorus</li>
                    <li>Partnered with Ajo Arizona Community Center to provide free concert
                    with proceeds benefitting Ajo High School music program</li>
                    <li>Worked with Board to grow budget from $120,000 to $150,000</li>
                    </ul>
                </div>  

                <div className="experience-item">
                    <h3>Desert Voices Chorus (2017-present)</h3>
                    <p><strong>Artistic Director</strong></p>
                    <ul>
                    <li>Program one holiday concert, one spring concert and a joint collabora-
                    tion summer concert focusing on themes performed through classical,
                    Broadway, pop, rock and other various musical genres</li>
                    <li>Grew singing membership from 45 singers to 85 singers</li>
                    <li>Partnered with twelve local Tucson community choruses for community
                    choral festival</li>
                    <li>Partnered with Desert Voices community chorus to start “Them” Youth
                    Chorus</li>
                    <li>Partnered with Ajo Arizona Community Center to provide free concert
                    with proceeds benefitting Ajo High School music program</li>
                    <li>Worked with Board to grow budget from $80,000 to $120,000</li>
                    </ul>
                </div> 

                <div className="experience-item">
                    <h3>El Rio Clinic Urban Community Chorus (2017-2018)</h3>
                    <p><strong>Artistic Director</strong></p>
                    <ul>
                    <li>Conducted weekly rehearsals for El Rio patients (mostly homeless
                        clients) and staff members focusing on the therapeutic value of music</li>
                    <li>Worked with singers on beginning singing and breathing exercises and
                    proper posturing for best vocal performance</li>
                    <li>Programmed music that relates to the mental health needs of the chorus
                    and can bring pride and value to the complex emotions that participants
                    feel from diagnoses and stresses of careerl</li>
                    <li>Collaborated with El Rio CEO and Board of Directors on recruiting
                    members and developing the choral program as a core value for members
                    of the community</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h3>Spectrum (2014-2017)</h3>
                    <p><strong>Creator & Artistic Director</strong></p>
                    <ul>
                    <li>Programmed biannual main-stage a cappella concerts focusing on
                    themes performed through classical, Broadway, pop, rock and other
                    musical genres</li>
                    <li>Sought out and arranged performing opportunities and outreach concerts
                    to local schools, churches and businesses</li>
                    <li>Arranged for performers to attend 2016 GALA free, with exception of
                    food costsl</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h3>Diverse Harmony (2011-2017)</h3>
                    <p><strong>Artistic Director</strong></p>
                    <ul>
                    <li>Programmed bi-yearly main-stage concerts focusing on themes
                    performed through classical, Broadway, pop, rock and other various
                    musical genres</li>
                    <li>Arranged summer musical theater camp during 2015 summer</li>
                    <li>Arranged outreach tours to Vancouver (2014) and Portland (2013) with
                    purpose of creating new youth choruses in GALA</li>
                    <li>Worked with Diverse Harmony to assist Portland’s Bridging Voices
                    Youth chorus in their creation</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h3>GALA Blockbuster Youth Invasion Concert (2016)</h3>
                    <p><strong>Artistic Director</strong></p>
                    <ul>
                    <li>Designed collaborative concert with seven youth choruses, including
                    joint pieces and individual choruses repertoire</li>
                    <li>Arranged joint mash-up piece for choruses to perform</li>
                    <li>Rehearsed youth choruses during joint rehearsals</li>
                    <li>Provided guidance for other youth chorus directors in programmatic
                    choices</li>
                    <li>Coordinated instrumentalists and singers</li>
                    <li>Met with donors for Youth Invasion concert and served as the
                    spokesperson for GALA Youth Choruses.</li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="resume-column right">
            <div className="resume-text">
                    <h2>Social Work Experience</h2>
                    <h2>Education</h2>
                    <ul>
                        <li><strong>Washington State Department of Health (2014)</strong> - Licensed Independent Clinical Social Worker</li>
                        <li><strong>University of Washington (2008-2010)</strong> - Master of Social Work, Concentration in Mental Health</li>
                        <li><strong>The Ohio State University (2002-2007)</strong> - Bachelor of Arts in Sexualities Studies</li>
                    </ul>
                    <div className="experience-item">
                        <h3>BetterHelp (2020-Present)</h3>
                        <p><strong>Therapist</strong></p>
                        <ul>
                        <li>Work with clients on establishing goals</li>
                        <li>Discuss therapeutic approaches and set expectations</li>
                        <li>Primary focus on LGBTQ and couple’s therapy</li>
                        <li>Work on therapeutic termination plans to end therapy</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <h3>GALA Board of Directors (2020-Present)</h3>
                        <p><strong>Education and Networking Committee Chair</strong></p>
                        <ul>
                        <li>Attend monthly Board meetings focusing in current state of GALA
                        activities and future goals</li>
                        <li>Attend and Lead monthly Education and Networking Committee
                        meetings that focus on GALA Symposium planning, updating resources
                        on the GALA website, and hiring for the GALA 411 program</li>
                        <li>Assist with GALA anniversary messaging and organizational
                        fundraising</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <h3>Arizona ACDA Board of Directors (2019)</h3>
                        <p><strong>TTBB Music Committee Chair</strong></p>
                        <ul>
                        <li>Attend Quarterly Meetings throughout state of Arizona to discuss
                        ongoings of the Arizona ACDA membership</li>
                        <li>Provide support for Arizona ACDA membership with questions
                        regarding TTBB music</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <h3>Virginia Mason Medican Center (2017-2018)</h3>
                        <p><strong>Inpatient Social Worker: Interim Supervisor</strong></p>
                        <ul>
                        <li>Supervised full-time and per diem staff members, hired and trained new
                        employees, create monthly staffing schedule, assisted with case consulta-
                        tions, engaged with administrations on working through system changes
                        that streamline work, directly supervised social workers towards licen-
                        sure hours, assisted patients with medical and social issues, developed
                        discharge plans with medical team and patient for coordination of care at
                        home or at medically assisted facilities, provide therapeutic interventions
                        with domestic violence survivors, provide addiction service interventions
                        for users, provided bereavement support, advise medical team on proto-
                        col for working with Child Protective Services and Adult Protective Ser-
                        vices, and presented ethical and legal concerns over patient care.</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <h3>Harborview Medical Center (2011-2016)</h3>
                        <p><strong>Inpatient Social Worker</strong></p>
                        <ul>
                        <li>Assisted patients with medical and social issues, developed discharge
                        plan with medical team and patient for coordination of care at home or at
                        medically assisted facilities, provided therapeutic interventions with do-
                        mestic violence survivors, provided addiction service interventions for
                        users, provided bereavement support, advised medical team on protocol
                        for working with Child Protective Services and Adult Protective Ser-
                        vices, and presented ethical and legal concerns over patient care.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Resume