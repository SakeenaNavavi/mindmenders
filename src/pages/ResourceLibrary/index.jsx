import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.css';

const spacing = '10px';

const ResourceLibrary = () => {
  return (
    <div>
      <Row className="website-container">
      <h3 className="h3">Youtube Videos</h3>  
 
        <Col md={4} className="youtubeboxed">
          <Row>
            <h4 className="titalh"> Depression : </h4> <br />
          <Col>
              <iframe className= "youtubevideo" src="https://www.youtube.com/embed/fWFuQR_Wt4M?si=lW5Rx3jPQzXEl32m" title="YouTube video player" frameborder="0" ></iframe>
          <p className="youtubeh"> What is Depression?</p>
          </Col>
          <Col>
          <iframe className= "youtubevideo"  src="https://www.youtube.com/embed/tJQRsIbD110?si=Oe2xsxXF97jt_mUx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p className="youtubeh"> Depression Explained (Major Depressive Disorder)</p>
          </Col>
          <Col>
          <iframe className= "youtubevideo"  src="https://www.youtube.com/embed/yVKaphs9sPU?si=wCAfJn6qNU9BN2Bf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           <p className="youtubeh"> The Science of Sadness: Neurobiology and Major Depressive Disorder</p>
          </Col>
          <Col>
          <iframe className= "youtubevideo"   src="https://www.youtube.com/embed/KSClXw4Wfxs?si=gaZqZY0h8uSMBRQ3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p className="youtubeh"> 8 Signs of Major Depressive Disorder</p>
          </Col>
          <h4 className="titalh"> Anxiety : </h4> <br />
          <Col>
          <iframe  className= "youtubevideo" src="https://www.youtube.com/embed/BVJkf8IuRjE?si=0xCzxCJUwetQMasb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           <p className="youtubeh">What is Anxiety?</p>
           </Col>
           <Col>
           <iframe className= "youtubevideo" src="https://www.youtube.com/embed/QLjPrNe63kk?si=V33SFfJwuT72rLp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           <p className="youtubeh">Social Anxiety Disorder - causes, symptoms, diagnosis, treatment, pathology</p>
           </Col>
           <Col>
           <iframe  className= "youtubevideo" src="https://www.youtube.com/embed/w_2STJAJhJM?si=yzAR_OHU_SMvm0RY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           <p className="youtubeh">Incredible animation on battling and overcoming anxiety - BBC</p>
           </Col>
           <Col>
           <iframe className= "youtubevideo"  src="https://www.youtube.com/embed/zTuX_ShUrw0?si=Tb--E--82TpUOt0N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           <p className="youtubeh">Rewiring the Anxious Brain: Neuroplasticity and the Anxiety Cycle: Anxiety Skills #21</p>
           </Col>
           <h4 className="titalh"> Stress : </h4> <br />
           <Col>
           <iframe className= "youtubevideo" src="https://www.youtube.com/embed/f9yCYlV-gNM?si=IuV3O21Z733Dfwcb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           <p className="youtubeh">Effects and Symptoms of Stress</p>
           </Col>
           <Col>
           <iframe  className= "youtubevideo" src="https://www.youtube.com/embed/AlMfEL_sCYI?si=SRhG5SuIaHieyca4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           <p className="youtubeh">Terrible Symptoms Of Stress On The Body</p>
           </Col>
           <Col>
           <iframe className= "youtubevideo" src="https://www.youtube.com/embed/e7OpB6xy83Y?si=-uZDeh485wW5zFde" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           <p className="youtubeh">Signs of Stress | Stress Symptoms | Dr. Justin Puder</p >
           </Col>
           <Col>
           <iframe className= "youtubevideo" src="https://www.youtube.com/embed/v-t1Z5-oPtU?si=xM1OUt829myb6Q4z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           <p className="youtubeh">How stress affects your body - Sharon Horesh Bergquist</p>
           </Col>
           <h4 className="titalh"> Insomnia  : </h4> <br />
           <Col>
           <iframe className= "youtubevideo" src="https://www.youtube.com/embed/vdc8JonEax8?si=8CUWfvQX-wW3WA0X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           <p className="youtubeh">Insomnia Explained Clearly - Causes, Pathophysiology & Treatment</p>
           </Col>
           <Col>
           <iframe className= "youtubevideo" src="https://www.youtube.com/embed/WVPtF7gr1jw?si=WiSZp81UJgJcybgh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           <p className="youtubeh">How to Fall Asleep Faster: CBT-Insomnia Treatment</p>
           </Col>
           <Col>
           <iframe className= "youtubevideo"  src="https://www.youtube.com/embed/gIwU5INBV_0?si=l6DP4dymYRlhuMAn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           <p className="youtubeh">What is Insomnia?Causes, Signs and symptoms, Diagnosis and treatment</p>
           </Col>
           <Col>
           <iframe className= "youtubevideo" src="https://www.youtube.com/embed/_tXFhGRqggc?si=CDjcWYu5gtmmEdUI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           <p className="youtubeh">What is Insomnia - Diagnosis and Treatments</p>
           </Col>
           <h4 className="titalh"> Overthinking : </h4> <br />
           <Col>
           <iframe className= "youtubevideo"src="https://www.youtube.com/embed/oGqu_U0EI8c?si=56vGspqSPIYKy1U7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           <p className="youtubeh">10 Things You Can Do To Stop Overthinking</p>
           </Col>
           <Col>
           <iframe className= "youtubevideo" src="https://www.youtube.com/embed/TZ9FNL1iI54?si=XMNsVqoKqxJiuUNw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           <p className="youtubeh">Overcoming Overthinking</p>
           </Col>
           <Col>
           <iframe className= "youtubevideo" src="https://www.youtube.com/embed/NU9ajgqYag8?si=W-zQFGj2Y8NwN1NO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           <p className="youtubeh">10 Signs You Might Be Overthinking</p>
           </Col>
           <Col>
           <iframe className= "youtubevideo" src="https://www.youtube.com/embed/yQumuTeDMC4?si=fWWE5NKGE6A6HBUH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           <p className="youtubeh">How To Stop Overthinking Everything You Do</p>
           </Col>
           <h4 className="titalh"> Eating Disorder : </h4> <br />
           <Col>
           <iframe className= "youtubevideo" src="https://www.youtube.com/embed/aBl6-UTvmn8?si=rVE_kNrMfUT4IHof" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           <p className="youtubeh">What is an Eating Disorder?</p>
           </Col>
          <Col>
          <iframe className= "youtubevideo" src="https://www.youtube.com/embed/DRQe8NcqvVY?si=rCtWmeAacu0nA8uV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p className="youtubeh"> What it means to have an eating disorder</p>
          </Col>
          <Col>
          <iframe className= "youtubevideo" src="https://www.youtube.com/embed/3Bax8ijH038?si=v6RoNzB4U-qJFIHD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p className="youtubeh"> Why are eating disorders so hard to treat? - Anees Bahji</p>
          </Col>
          <Col>
           <iframe className= "youtubevideo" src="https://www.youtube.com/embed/MsSXh1BxLjE?si=sRgX-I4QfIiY8c_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p className="youtubeh"> Signs of an Eating Disorder</p>
          </Col>
          <h4 className="titalh"> Bipolar Disorder : </h4> <br />
          <Col>
          <iframe className= "youtubevideo" src="https://www.youtube.com/embed/G9vkGCo7Gtg?si=lEsFW71QYYlcVse6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p className="youtubeh"> What is Bipolar Disorder?</p>
          </Col>
          <Col>
          <iframe className= "youtubevideo" src="https://www.youtube.com/embed/KSvk8LLBo2g?si=ma0BA3B4oqIbh4l7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p className="youtubeh"> Bipolar disorder (depression & mania) - causes, symptoms, treatment & pathology</p>
          </Col>
          <Col>
          <iframe className= "youtubevideo" src="https://www.youtube.com/embed/AM7vf5HJxaQ?si=S7CnaQiDVCe7n3ym" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p className="youtubeh">Bipolar Disorder vs Depression - 5 Signs You're Likely Bipolar</p>
          </Col>
          <Col>
          <iframe className= "youtubevideo" src="https://www.youtube.com/embed/ZwMlHkWKDwM?si=-H4WFWeoHfuqxXLj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p className="youtubeh"> Depressive and Bipolar Disorders: Crash Course Psychology </p>
          </Col>
          <h4 className="titalh"> Phobias : </h4> <br />
          <Col>
          <iframe className= "youtubevideo" src="https://www.youtube.com/embed/PCOg2G797ek?si=fVOGPC0cpw8wyL_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p className="youtubeh"> Phobias - specific phobias, agoraphobia, & social phobia</p>
          </Col>
          <Col>
          <iframe className= "youtubevideo" src="https://www.youtube.com/embed/oWtVbDs1gkU?si=TvNqPe2-fzQdHVZ9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p className="youtubeh"> 9 Common Phobias You’ve Probably Don’t Know Much About</p>
          </Col>
          <Col>
          <iframe className= "youtubevideo" src="https://www.youtube.com/embed/E705zO58SnQ?si=inf7lxjZaLCbEj1z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p className="youtubeh"> Phobia, Causes, Signs and Symptoms, Diagnosis and Treatment.</p>
          </Col>
          <Col>
          <iframe className= "youtubevideo" src="https://www.youtube.com/embed/9IV13gJ811c?si=kJCymjq_zy-rwxBC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p className="youtubeh">Weirdest Phobias People Suffer From!</p>
          </Col>
          <h4 className="titalh"> ADHD : </h4> <br />
          <Col>
          <iframe className= "youtubevideo" src="https://www.youtube.com/embed/5l2RIOhDXvU?si=SBM8DwCg55ipbd9u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p className="youtubeh">What is ADHD?</p>
          </Col>
          <Col>
          <iframe className= "youtubevideo" src="https://www.youtube.com/embed/mlIJ_oSJsYw?si=TC22dh8LhFyhWUW5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p className="youtubeh">10 Common ADHD Symptoms in Adults (with real-life examples)</p>
          </Col>
          <Col>
          <iframe className= "youtubevideo" src="https://www.youtube.com/embed/hC085F1rEDg?si=KOi4E-TKipDgp0QS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p className="youtubeh">ADHD & Emotions : do you struggle with Emotional Dysregulation 😣?</p>
          </Col>
          <Col>
          <iframe className= "youtubevideo" src="https://www.youtube.com/embed/I7QGn1Ri9cg?si=YwNo92mSWC5Wjx81" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p className="youtubeh">ADHD Medication</p>
          </Col>
          </Row>
        </Col>
        
       <h3 className="h3">Articals</h3>
        <Col md={4} className="articalboxed">
          <Row>
            <Col>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img className="img"
          src="https://th.bing.com/th/id/OIP.J3INRhHruZwMtDCkiotQSwHaDt?w=336&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
      <p>
        <a href="https://www.voicesofyouth.org/blog/breath-stuck-me-and-my-depression">
         https://www.voicesofyouth.org/blog/breath-stuck-me-and-my-depression
       </a>
    </p>
        </div>
      </div>
    </div>
  </div>
</Col>
<Col>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img className="img"
          src="data:image/jpeg;base64,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"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
      <p>
        <a href="https://www.nami.org/Blogs/NAMI-Blog/August-2022/Walking-on-a-Tight-Rope-Coping-with-Depression">
        https://www.nami.org/Blogs/NAMI-Blog/August-2022/Walking-on-a-Tight-Rope-Coping-with-Depression
       </a>
    </p>
        </div>
      </div>
    </div>
  </div>

</Col>
<Col>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img className="img"
          src="https://th.bing.com/th/id/OIP.FZXf9BgD9K-ZrzDt8fcEVQHaHj?w=181&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
      <p>
        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3724232/">
        https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3724232/
       </a>
    </p>
        </div>
      </div>
    </div>
  </div>

</Col>
<Col>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img className="img"
          src="https://th.bing.com/th/id/OIP.P2k5eMrMFrYg2u5CF81xnwAAAA?w=155&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
      <p>
        <a href="https://www.helpguide.org/articles/eating-disorders/helping-someone-with-an-eating-disorder.htm">
        https://www.helpguide.org/articles/eating-disorders/helping-someone-with-an-eating-disorder.htm
       </a>
    </p>
        </div>
      </div>
    </div>
  </div>

</Col>
<Col>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img className="img"
          src="https://th.bing.com/th/id/OIP.oo3ETI-McLr3uuU7diqqzgAAAA?w=183&h=124&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
      <p>
        <a href="https://adc.bmj.com/content/90/suppl_1/i2">
        https://adc.bmj.com/content/90/suppl_1/i2
       </a>
    </p>
        </div>
      </div>
    </div>
  </div>

</Col>
<Col>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img className="img"
          src="https://www.psychiatry.org/assets/images/logos/c-logo.svg"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
      <p>
        <a href="https://www.psychiatry.org/patients-families/adhd/what-is-adhd">
        https://www.psychiatry.org/patients-families/adhd/what-is-adhd
       </a>
    </p>
        </div>
      </div>
    </div>
  </div>

</Col>
<Col>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img className="img"
          src="https://childmind.org/wp-content/uploads/2021/07/ChildMindInstitute_Logo_Horizontal.svg"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
      <p>
        <a href="https://childmind.org/article/eating-disorders-and-college/">
        https://childmind.org/article/eating-disorders-and-college/
       </a>
    </p>
        </div>
      </div>
    </div>
  </div>

    </Col>
    <Col>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img className="img"
          src="https://th.bing.com/th/id/OIP.I6nbZnVIVaz04S7kVWdRtQAAAA?w=195&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
      <p>
        <a href="https://kids.frontiersin.org/articles/10.3389/frym.2020.545034">
        https://kids.frontiersin.org/articles/10.3389/frym.2020.545034
       </a>
    </p>
        </div>
      </div>
    </div>
  </div>

</Col>
<Col>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img className="img"
          src="https://www.nami.org/NAMI/media/NAMI-Redesign/nami-logo-blue.svg?ext=.svg"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
      <p>
        <a href="https://www.nami.org/Personal-Stories/My-Story-with-Bipolar-Disorder">
        https://www.nami.org/Personal-Stories/My-Story-with-Bipolar-Disorder
       </a>
    </p>
    
        </div>
      </div>
    </div>
  </div>

    </Col>
  </Row>
</Col>
<h3 className="h3"> Book Read</h3>
        <Col md={4} className="bookboxed">
       <Row>
        <Col>
        <div class="card mb-3">
         <div class="row g-0">
           <div class="col-md-4">
             <img className="img"
               src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1672870598i/61612877.jpg"
              alt="..."
             />
           </div>
         <div class="col-md-8">
       <div class="card-body">
        <p>Where to Start: A Survival Guide to Anxiety, Depression, and Other Mental Health Challengesby Mental Health America</p>
          <a
            href="https://www.amazon.com/Where-Start-Survival-Depression-Challenges/dp/059353140X"
            target="_blank" 
            rel="noopener noreferrer"  >
         </a>
           <button
            onClick={() => {
             window.location.href = "https://www.amazon.com/Where-Start-Survival-Depression-Challenges/dp/059353140X";
             }}
         >
          Want to read
        </button>
       </div>
      </div>
    </div>
  </div>
 </Col>
 <Col>
        <div class="card mb-3">
         <div class="row g-0">
           <div class="col-md-4">
             <img className="img"
               src="https://th.bing.com/th?id=OSK.ef05a4d346ce5f5853b2cbf60e1feb75&w=124&h=168&c=7&o=6&dpr=1.3&pid=SANGAM"
              alt="..."
             />
           </div>
         <div class="col-md-8">
       <div class="card-body">
        <p>The Upside of Being Down: How Mental Health Struggles Led to My Greatest Successes in Work and Life by: Jen Gotch</p>
          <a
            href="https://www.amazon.com/Upside-Being-Down-Struggles-Successes/dp/1982108819"
            target="_blank" 
            rel="noopener noreferrer"  >
         </a>
           <button
            onClick={() => {
             window.location.href = "https://www.amazon.com/Upside-Being-Down-Struggles-Successes/dp/1982108819";
             }}
         >
          Want to read
        </button>
       </div>
      </div>
    </div>
  </div>
 </Col>

 <Col>
        <div class="card mb-3">
         <div class="row g-0">
           <div class="col-md-4">
             <img className="img"
               src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1525298236i/39835253.jpg"
              alt="..."
             />
           </div>
         <div class="col-md-8">
       <div class="card-body">
        <p>Are u ok?: A Guide to Caring for Your Mental Health by Kati Morton</p>
          <a
            href="https://www.amazon.com/Are-Guide-Caring-Mental-Health/dp/0738234990"
            target="_blank" 
            rel="noopener noreferrer"  >
         </a>
           <button
            onClick={() => {
             window.location.href = "https://www.amazon.com/Are-Guide-Caring-Mental-Health/dp/0738234990";
             }}
         >
          Want to read
        </button>
       </div>
      </div>
    </div>
  </div>
 </Col>
 <Col>
        <div class="card mb-3">
         <div class="row g-0">
           <div class="col-md-4">
             <img className="img"
               src="https://th.bing.com/th?id=OSK.01ea746ae24624adcd0fdca45248d49e&w=124&h=168&c=7&o=6&dpr=1.3&pid=SANGAM"
              alt="..."
             />
           </div>
         <div class="col-md-8">
       <div class="card-body">
        <p>Own Your Past Change Your Future: A Not-So-Complicated Approach to Relationships, Mental Health & Wellness by John Delony & Dave Ramsey</p>
          <a
            href="https://www.goodreads.com/book/show/60279448-own-your-past-change-your-future"
            target="_blank" 
            rel="noopener noreferrer"  >
         </a>
           <button
            onClick={() => {
             window.location.href = "https://www.goodreads.com/book/show/60279448-own-your-past-change-your-future";
             }}
         >
          Want to read
        </button>
       </div>
      </div>
    </div>
  </div>
 </Col>
 <Col>
        <div class="card mb-3">
         <div class="row g-0">
           <div class="col-md-4">
             <img className="img"
               src="https://www.bing.com/th?id=OIP.TBwQxGwwcJrl5RAHx8HS0wHaD4&w=176&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="..."
             />
           </div>
         <div class="col-md-8">
       <div class="card-body">
        <p>You Are Not Alone: The NAMI Guide to Navigating Mental Health by Ken Duckworth</p>
          <a
            href="https://www.goodreads.com/book/show/61223190-you-are-not-alone"
            target="_blank" 
            rel="noopener noreferrer"  >
         </a>
           <button
            onClick={() => {
             window.location.href = "https://www.goodreads.com/book/show/61223190-you-are-not-alone";
             }}
         >
          Want to read
        </button>
       </div>
      </div>
    </div>
  </div>
 </Col>
 <Col>
        <div class="card mb-3">
         <div class="row g-0">
           <div class="col-md-4">
             <img className="img"
               src="https://th.bing.com/th?id=OSK.b7a9acb1a3ce125936a0ecade450e12b&w=124&h=168&c=7&o=6&dpr=1.3&pid=SANGAM"
              alt="..."
             />
           </div>
         <div class="col-md-8">
       <div class="card-body">
        <p>This Book Will Change Your Mind About Mental Health: A journey into the heartland of psychiatry by Nathan Filer</p>
          <a
            href="https://www.goodreads.com/book/show/52992519-this-book-will-change-your-mind-about-mental-health"
            target="_blank" 
            rel="noopener noreferrer"  >
         </a>
           <button
            onClick={() => {
             window.location.href = "https://www.goodreads.com/book/show/52992519-this-book-will-change-your-mind-about-mental-health";
             }}
         >
          Want to read
        </button>
       </div>
      </div>
    </div>
  </div>
 </Col>
 <Col>
        <div class="card mb-3">
         <div class="row g-0">
           <div class="col-md-4">
             <img className="img"
               src="https://th.bing.com/th?id=OSK.fa74effd7bb60a827b7c4300f7c7aa17&w=124&h=168&c=7&o=6&dpr=1.3&pid=SANGAM"
              alt="..."
             />
           </div>
         <div class="col-md-8">
       <div class="card-body">
        <p>The Resilient Life: Manage Stress, Prevent Burnout, & Strengthen Your Mental and Physical Health <br />by Susan Biali M.D.</p>
          <a
            href="https://www.goodreads.com/book/show/61389729-the-resilient-life"
            target="_blank" 
            rel="noopener noreferrer"  >
         </a>
           <button
            onClick={() => {
             window.location.href = "https://www.goodreads.com/book/show/61389729-the-resilient-life";
             }}
         >
          Want to read
        </button>
       </div>
      </div>
    </div>
  </div>
 </Col>
 <Col>
        <div class="card mb-3">
         <div class="row g-0">
           <div class="col-md-4">
             <img className="img"
               src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348611758i/12951039.jpg"
              alt="..."
             />
           </div>
         <div class="col-md-8">
       <div class="card-body">
        <p>8 Keys to Recovery from an Eating Disorder: Effective Strategies from Therapeutic Practice and Personal Experience<br />by Carolyn Costin , Gwen Schubert Grabb & Babette Rothschild</p>
          <a
            href="https://www.goodreads.com/book/show/12951039-8-keys-to-recovery-from-an-eating-disorder"
            target="_blank" 
            rel="noopener noreferrer"  >
         </a>
           <button
            onClick={() => {
             window.location.href = "https://www.goodreads.com/book/show/12951039-8-keys-to-recovery-from-an-eating-disorder";
             }}
         >
          Want to read
        </button>
       </div>
      </div>
    </div>
  </div>
 </Col>
 <Col>
        <div class="card mb-3">
         <div class="row g-0">
           <div class="col-md-4">
             <img className="img"
               src="https://m.media-amazon.com/images/I/51rbZvBqBsL._SY445_SX342_.jpg"
              alt="..."
             />
           </div>
         <div class="col-md-8">
       <div class="card-body">
        <p>365 Ways to Take Control of Your Mental Health: One Revolutionary Concept a Day to Create the Life You Desire by Taylor Fischer</p>
          <a
            href="https://www.goodreads.com/book/show/60063563-365-ways-to-take-control-of-your-mental-health"
            target="_blank" 
            rel="noopener noreferrer"  >
         </a>
           <button
            onClick={() => {
             window.location.href = "https://www.goodreads.com/book/show/60063563-365-ways-to-take-control-of-your-mental-health";
             }}
         >
          Want to read
        </button>
       </div>
      </div>
    </div>
  </div>
 </Col>
 <Col>
        <div class="card mb-3">
         <div class="row g-0">
           <div class="col-md-4">
             <img className="img"
               src="https://th.bing.com/th?id=OSK.6ca8e3cb729936cec59bbc2f0d3caefb&w=124&h=168&c=7&o=6&dpr=1.3&pid=SANGAM"
              alt="..."
             />
           </div>
         <div class="col-md-8">
       <div class="card-body">
        <p>Your Brain Needs a Hug: Life, Love, Mental Health, and Sandwiches<br/>by Rae Earl</p>
          <a
            href="https://www.goodreads.com/book/show/40864852-your-brain-needs-a-hug"
            target="_blank" 
            rel="noopener noreferrer"  >
         </a>
           <button
            onClick={() => {
             window.location.href = "https://www.goodreads.com/book/show/40864852-your-brain-needs-a-hug";
             }}
         >
          Want to read
        </button>
       </div>
      </div>
    </div>
  </div>
 </Col>
 <Col>
        <div class="card mb-3">
         <div class="row g-0">
           <div class="col-md-4">
             <img className="img"
               src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1527566380i/40231471.jpg"
              alt="..."
             />
           </div>
         <div class="col-md-8">
       <div class="card-body">
        <p>You Are Not a Rock: A Step-by-Step Guide to Better Mental Health <br />by Mark Freeman</p>
          <a
            href="https://www.goodreads.com/book/show/40231471-you-are-not-a-rock"
            target="_blank" 
            rel="noopener noreferrer"  >
         </a>
           <button
            onClick={() => {
             window.location.href = "https://www.goodreads.com/book/show/40231471-you-are-not-a-rock";
             }}
         >
          Want to read
        </button>
       </div>
      </div>
    </div>
  </div>
 </Col>
 <Col>
        <div class="card mb-3">
         <div class="row g-0">
           <div class="col-md-4">
             <img className="img"
               src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1679466680i/75593830.jpg"
              alt="..."
             />
           </div>
         <div class="col-md-8">
       <div class="card-body">
        <p>Mind Games: Winning the Battle for Your Mental and Emotional Health <br />by Paul Daugherty</p>
          <a
            href="https://www.goodreads.com/book/show/75593830-mind-games"
            target="_blank" 
            rel="noopener noreferrer"  >
         </a>
           <button
            onClick={() => {
             window.location.href = "https://www.goodreads.com/book/show/75593830-mind-games";
             }}
         >
          Want to read
        </button>
       </div>
      </div>
    </div>
  </div>
 </Col>
</Row>
</Col>
 </Row>
      
    </div>
  );
};

export default ResourceLibrary;
