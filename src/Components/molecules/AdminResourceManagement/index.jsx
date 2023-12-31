import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.css';
import supabase from '../../../supa/supabase/supabaseClient';
// Define handleCardClick function somewhere in your code
const handleCardClick = (param1, param2) => {
  // Your logic here
  console.log("Clicked with parameters:", param1, param2);
  // Add the logic you want to execute when the card is clicked
};

const AdminResourceLibrary = () => {
  const [data, setData] = useState({
    Condition_id: '',
    Resource_id: '',

  });

  const handleInsert = async (Condition_id, Resource_id) => {
    try {

      console.log('Condition ID:', Condition_id);
      console.log('Resource ID:', Resource_id);
      const { data: insertedData, error } = await supabase
        .from('tblVisitorResources')
        .insert(
          {
            Condition_id: Condition_id,
            Resource_id: Resource_id,

          },
        );

      if (error) {
        console.error('Error inserting data:', error);

      } else {
        console.log('Data inserted successfully:', insertedData);

      }
    } catch (error) {
      console.error('Error:', error.message);

    }
  };

  const openYoutubeVideo = (videoUrl) => {
    window.open(videoUrl, '_blank');
  };

  const openArticle = (articleUrl) => {
    window.open(articleUrl, '_blank');
  };


  return (
    <div>
      <h2 className="resourcelibraryh">
        Explore our video section within the resource library, where you'll find valuable content
        to enhance your mental well-being and gain insights into self-care and personal growth.
      </h2>
      <Row className="website-container">
        <h3 className="h3">Youtube Videos</h3>

        <Col md={4} className="youtubeboxed">
          <Row>
            <h4 className="titalh"> Depression : </h4> <br />
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/fWFuQR_Wt4M/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() =>
                  openYoutubeVideo('https://www.youtube.com/embed/fWFuQR_Wt4M?si=lW5Rx3jPQzXEl32m')
                }
              />
              <p className="youtubeh"> What is Depression?</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/embed/fWFuQR_Wt4M?si=lW5Rx3jPQzXEl32m');
                  await handleInsert("3d1f1ad7-c064-450a-81f5-d55f262dcc2f", "1e742ca4-c550-450e-8554-c8e85fddf191");

                }}
              >
                Watch Video
              </button>

            </Col>
            <Col>

              <img
                className="youtubevideo"
                src="https://i3.ytimg.com/vi/tJQRsIbD110/hqdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110')}
              />
              <p className="youtubeh">Depression Explained </p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("3d1f1ad7-c064-450a-81f5-d55f262dcc2f", "0a25eca6-4b18-4cf1-8b55-53dc521773df");

                }}
              >
                Watch Video
              </button>

            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/yVKaphs9sPU/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/yVKaphs9sPU?si=hEAOEL12WJN6HsEc')}
              />
              <p className="youtubeh"> The Science of Sadness</p> <br />
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("3d1f1ad7-c064-450a-81f5-d55f262dcc2f", "cbd20a6f-edc9-4b47-8e53-f65b3e22ff82");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/KSClXw4Wfxs/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/KSClXw4Wfxs?si=fIdo-ZBQMivIXcA0')}
              />
              <p className="youtubeh"> 8 Signs of Major Depressive Disorder</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("3d1f1ad7-c064-450a-81f5-d55f262dcc2f", "8d9f796b-e86b-4863-8aeb-a2cbef67bc32");

                }}
              >
                Watch Video
              </button>
            </Col>
            <h4 className="titalh"> Anxiety : </h4> <br />
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/BVJkf8IuRjE/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/BVJkf8IuRjE?si=eBr_GeJ-P2QhAya-')}
              />
              <p className="youtubeh">What is Anxiety?</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("9861d00c-a5a6-4653-9dad-7c9b48003ca8", "eba0c615-676c-444f-bc2c-3c9bb1271115");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/QLjPrNe63kk/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/QLjPrNe63kk?si=YX0YUQC5fk_01OJ3')}
              />
              <p className="youtubeh">Social Anxiety Disorder</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("9861d00c-a5a6-4653-9dad-7c9b48003ca8", "6f3d5aad-b45c-44e1-aff9-cbbed20bd1db");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/w_2STJAJhJM/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/w_2STJAJhJM?si=Z7XqqB8nrqq9xHTE')}
              />
              <p className="youtubeh">Incredible animation on battling </p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("9861d00c-a5a6-4653-9dad-7c9b48003ca8", "6902b9b7-28b9-4522-ac33-e46f3ec816eb");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/zTuX_ShUrw0/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/zTuX_ShUrw0?si=aNW2QhuKZVFPSPnX')}
              />
              <p className="youtubeh">Rewiring the Anxious Brain</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("9861d00c-a5a6-4653-9dad-7c9b48003ca8", "ba3d336d-feb1-497d-96f8-8cbcee019bb5");

                }}
              >
                Watch Video
              </button>
            </Col>
            <h4 className="titalh"> Stress : </h4> <br />
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/XUDt52IlzIE/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/f9yCYlV-gNM?si=7isN-HDgQGlxAhY3')}
              />
              <p className="youtubeh">Effects and Symptoms of Stress</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("2b715c64-5c8c-454c-be85-ff00527239aa", "ee02ed8e-8402-4b26-8090-f0a3b8f6945b");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/AlMfEL_sCYI/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/AlMfEL_sCYI?si=-TntfTC82b8KzMBN')}
              />
              <p className="youtubeh">Terrible Symptoms Of Stress On The Body</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("2b715c64-5c8c-454c-be85-ff00527239aa", "4cf05d73-9fbb-44f1-9a22-153753521cf0");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/e7OpB6xy83Y/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/e7OpB6xy83Y?si=jsz-z6xF-rmypY1w')}
              /> <p className="youtubeh">Signs of Stress | Stress Symptoms </p >
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("2b715c64-5c8c-454c-be85-ff00527239aa", "4afda659-abcb-4189-a056-99cc29a13cd2");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/v-t1Z5-oPtU/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/v-t1Z5-oPtU?si=dTSLHcZtfhD863SE')}
              />
              <p className="youtubeh">How stress affects your body </p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("2b715c64-5c8c-454c-be85-ff00527239aa", "aceced93-bcc8-4ce2-afd0-a2cccd7b2799");

                }}
              >
                Watch Video
              </button>
            </Col>
            <h4 className="titalh"> Insomnia  : </h4> <br />
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/vdc8JonEax8/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/vdc8JonEax8?si=sIkS28IUA5gOMEXb')}
              />
              <p className="youtubeh">Insomnia Explained Clearly </p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("0b96eb49-0599-42cc-bfed-8c925ed18e57", "1d6a1f56-263a-418d-bd53-a268f8610b00");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/WVPtF7gr1jw/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/WVPtF7gr1jw?si=QpsZ0qohm8CkRzNt')}
              />
              <p className="youtubeh">How to Fall Asleep Faster</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("0b96eb49-0599-42cc-bfed-8c925ed18e57", "7421d55a-18e4-41fa-b176-10102c6af52c");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/gIwU5INBV_0/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/gIwU5INBV_0?si=Lxks5Scf8qPJQa19')}
              />
              <p className="youtubeh">What is Insomnia?</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("0b96eb49-0599-42cc-bfed-8c925ed18e57", "a6d3e2ca-f638-4b6f-ab9a-cc7eea7796c8");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/_tXFhGRqggc/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/_tXFhGRqggc?si=Fp69UDW-IhzfyUI_')}
              />
              <p className="youtubeh">What is Insomnia - Diagnosis and Treatments</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("0b96eb49-0599-42cc-bfed-8c925ed18e57", "733628c5-325a-4c97-81b8-adc6de535093");

                }}
              >
                Watch Video
              </button>
            </Col>
            <h4 className="titalh"> Overthinking : </h4> <br />
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/oGqu_U0EI8c/sddefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110')}
              />
              <p className="youtubeh">10 Things You Can Do To Stop Overthinking</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("1bad27b5-941d-47dd-b957-a5d3324e4cc8", "fbe26cbd-4d84-40fd-ace4-7285b9fb972d");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/TZ9FNL1iI54/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/oGqu_U0EI8c?si=oNt7flzvP0KxsOAY')}
              />
              <p className="youtubeh">Overcoming Overthinking</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("1bad27b5-941d-47dd-b957-a5d3324e4cc8", "3d82d879-ec0c-4393-b328-b03570391aa9");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/NU9ajgqYag8/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/oGqu_U0EI8c?si=ZZkyIGR7M54LM3NH')}
              />
              <p className="youtubeh">10 Signs You Might Be Overthinking</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("1bad27b5-941d-47dd-b957-a5d3324e4cc8", "5a2594a2-559c-45b2-ad59-ad11f56fe326");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/yQumuTeDMC4/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/TZ9FNL1iI54?si=eJjnZX9eMjNmdqGn')}
              />
              <p className="youtubeh">How To Stop Overthinking Everything You Do</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("1bad27b5-941d-47dd-b957-a5d3324e4cc8", "5aacd6cd-47c0-4c6c-9019-212fda634697");

                }}
              >
                Watch Video
              </button>
            </Col>
            <h4 className="titalh"> Eating Disorder : </h4> <br />
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/aBl6-UTvmn8/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/NU9ajgqYag8?si=SVqZMKl22ltDXGBI')}
              />
              <p className="youtubeh">What is an Eating Disorder?</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("1ba24848-66ea-4181-97de-7134e1200b43", "bd49c286-e959-45ed-887d-82c60d2da149");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/DRQe8NcqvVY/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/yQumuTeDMC4?si=4lZp_PT58ZkMwSyZ')}
              />
              <p className="youtubeh"> What it means to have an eating disorder</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("1ba24848-66ea-4181-97de-7134e1200b43", "24616c47-28f9-456e-8d51-aae3b1da8dfc");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/3Bax8ijH038/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/aBl6-UTvmn8?si=nWuLuKGPfm3u2JFA')}
              />
              <p className="youtubeh"> Why are eating disorders so hard to treat?</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("1ba24848-66ea-4181-97de-7134e1200b43", "a446a1b9-8012-4c01-aa73-4d172c966620");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/MsSXh1BxLjE/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/DRQe8NcqvVY?si=JLcVIQBH7EvfgyMo')}
              />
              <p className="youtubeh"> Signs of an Eating Disorder</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("1ba24848-66ea-4181-97de-7134e1200b43", "7456db76-b79f-4be7-8608-27d770dca634");

                }}
              >
                Watch Video
              </button>
            </Col>
            <h4 className="titalh"> Bipolar Disorder : </h4> <br />
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/G9vkGCo7Gtg/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/3Bax8ijH038?si=TCM4dXil6N7mnmsU')}
              />
              <p className="youtubeh"> What is Bipolar Disorder?</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("c0149b6e-ea67-4121-83ec-3d897ebeffd6", "a3153c1e-86ce-47cf-8bf2-1245f233d1aa");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/KSvk8LLBo2g/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/MsSXh1BxLjE?si=Im3yCNm0oRcRqdig')}
              />
              <p className="youtubeh"> Bipolar disorder (depression & mania) </p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("c0149b6e-ea67-4121-83ec-3d897ebeffd6", "748a52fd-1d82-4307-83fd-61de42ba60d0");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/AM7vf5HJxaQ/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/G9vkGCo7Gtg?si=oriUZWz1r_Yhz-MC')}
              />
              <p className="youtubeh">Bipolar Disorder vs Depression </p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("c0149b6e-ea67-4121-83ec-3d897ebeffd6", "ad77079f-0d4e-409f-bb66-4f0d27f0e6f9");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/ZwMlHkWKDwM/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/KSvk8LLBo2g?si=t5t4rqddQ_HahCB9')}
              />
              <p className="youtubeh"> Depressive and Bipolar Disorders </p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("c0149b6e-ea67-4121-83ec-3d897ebeffd6", "27e7fa73-a1ea-4b79-9848-598c98bc272c");

                }}
              >
                Watch Video
              </button>
            </Col>
            <h4 className="titalh"> Phobias : </h4> <br />
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/PCOg2G797ek/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/AM7vf5HJxaQ?si=nmeVDsPUZX_Ju8E8')}
              />
              <p className="youtubeh"> Phobias - specific phobias and social phobia</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("05dd5e84-71c9-4bbd-83cf-3cf61e5b126c", "fecc70a9-689e-4269-a0e6-615151b4c390");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/oWtVbDs1gkU/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/ZwMlHkWKDwM?si=xk6t0FejpUXku2DO')}
              />
              <p className="youtubeh"> 9 Common Phobias</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("05dd5e84-71c9-4bbd-83cf-3cf61e5b126c", "8f0d3c5f-6b15-4f4f-abe7-29b4da79dfb7");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/E705zO58SnQ/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/PCOg2G797ek?si=vwgjfKEOJduaTGgW')}
              />
              <p className="youtubeh"> Phobia, Causes, Signs and Symptoms</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("05dd5e84-71c9-4bbd-83cf-3cf61e5b126c", "3b28dfeb-9b42-4919-8e4d-21297410a9b6");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/9IV13gJ811c/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/oWtVbDs1gkU?si=RTFk8CI97OE7e_DY')}
              />
              <p className="youtubeh">Weirdest Phobias People Suffer From!</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("05dd5e84-71c9-4bbd-83cf-3cf61e5b126c", "41286323-861c-4cc5-846d-a66be2b3bc00");

                }}
              >
                Watch Video
              </button>
            </Col>
            <h4 className="titalh"> ADHD : </h4> <br />
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/5l2RIOhDXvU/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/E705zO58SnQ?si=BlpWuJ5ZKt5QLXO7')}
              />
              <p className="youtubeh">What is ADHD?</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("f5c4ce07-51b5-421d-9c17-672d2752e306", "ea0335e1-fd34-413d-8ab3-5ca9ae9e154f");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/mlIJ_oSJsYw/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/wVTvcxEWClg?si=ewk_8b1LYwC8sGJc')}
              />
              <p className="youtubeh">10 Common ADHD Symptoms in Adults </p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("f5c4ce07-51b5-421d-9c17-672d2752e306", "b581564f-e9e8-4295-9f81-73fad03bcce8");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/hC085F1rEDg/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/hC085F1rEDg?si=TQVfpd0ztUAQ3HuT')}
              />
              <p className="youtubeh">ADHD & Emotions </p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("f5c4ce07-51b5-421d-9c17-672d2752e306", "bd463b22-db6e-4412-bd3f-173e4ca33b65");

                }}
              >
                Watch Video
              </button>
            </Col>
            <Col>
              <img
                className="youtubevideo"
                src="https://img.youtube.com/vi/I7QGn1Ri9cg/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/I7QGn1Ri9cg?si=wUOd_7mRHhyCQ3qz')}
              />
              <p className="youtubeh">ADHD Medication</p>
              <button
                className="youtubrbutton"
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("f5c4ce07-51b5-421d-9c17-672d2752e306", "407f7ce3-3b15-4feb-a36f-c1e1cf2a131f");

                }}
              >
                Watch Video
              </button>
            </Col>
          </Row>
        </Col>

        <h3 className="h3">Explore our comprehensive articles section</h3>
        <Col md={4} className="articalboxed">
          <Row>
            <Col>
              <div className="card mb-3 librarycard" onClick={() => handleCardClick("f5c4ce07-51b5-421d-9c17-672d2752e306", "407f7ce3-3b15-4feb-a36f-c1e1cf2a131f")}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://th.bing.com/th/id/OIP.J3INRhHruZwMtDCkiotQSwHaDt?w=336&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      
                        <h5 className="articalh5">A Breath Stuck: Me and My Depression</h5>
                        <button
                          className="articalabtn"
                          onClick={async () => {

                            openArticle('https://www.voicesofyouth.org/blog/breath-stuck-me-and-my-depression');
                            await handleInsert("f5c4ce07-51b5-421d-9c17-672d2752e306", "407f7ce3-3b15-4feb-a36f-c1e1cf2a131f");
                          }}
                        >
                          Read Now
                        </button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col>
              <div class="card mb-3 librarycard" onClick={() => handleCardClick("f5c4ce07-51b5-421d-9c17-672d2752e306", "407f7ce3-3b15-4feb-a36f-c1e1cf2a131f")} >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="data:image/jpeg;base64,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"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      
                        <h5 className="articalh5">Walking on a Tight Rope: Coping with Depression</h5>
                        <button
                          className="articalabtn"
                          onClick={async () => {

                            openArticle('https://www.nami.org/Blogs/NAMI-Blog/August-2022/Walking-on-a-Tight-Rope-Coping-with-Depression');
                            await handleInsert("f5c4ce07-51b5-421d-9c17-672d2752e306", "407f7ce3-3b15-4feb-a36f-c1e1cf2a131f");
                          }}
                        >
                          Read Now
                        </button>
                      

                    </div>
                  </div>
                </div>
              </div>

            </Col>
            <Col>
              <div className="card mb-3 librarycard" onClick={() => handleCardClick("f5c4ce07-51b5-421d-9c17-672d2752e306", "407f7ce3-3b15-4feb-a36f-c1e1cf2a131f")} >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://www.nami.org/NAMI/media/NAMI-Redesign/nami-logo-blue.svg?ext=.svg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      
                        <h5 className="articalh5">My Story With Bipolar Disorder</h5>
                        <button
                          className="articalabtn"
                          onClick={async () => {

                            openArticle('https://www.nami.org/Personal-Stories/My-Story-with-Bipolar-Disorder');
                            await handleInsert("f5c4ce07-51b5-421d-9c17-672d2752e306", "407f7ce3-3b15-4feb-a36f-c1e1cf2a131f");
                          }}
                        >
                          Read Now
                        </button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div class="card mb-3 librarycard" onClick={() => handleCardClick("f5c4ce07-51b5-421d-9c17-672d2752e306", "407f7ce3-3b15-4feb-a36f-c1e1cf2a131f")} >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="https://th.bing.com/th/id/OIP.P2k5eMrMFrYg2u5CF81xnwAAAA?w=155&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                    <h5 className="articalh5">Helping Someone with an Eating Disorder</h5>
                        <button
                          className="articalabtn"
                          onClick={async () => {
                            openArticle('https://www.helpguide.org/articles/eating-disorders/helping-someone-with-an-eating-disorder.htm');
                            await handleInsert("f5c4ce07-51b5-421d-9c17-672d2752e306", "407f7ce3-3b15-4feb-a36f-c1e1cf2a131f");
                          }}
                        >
                          Read Now
                        </button>
                    

                    </div>
                  </div>
                </div>
              </div>

            </Col>
            <Col>
              <div class="card mb-3 librarycard">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="https://th.bing.com/th/id/OIP.oo3ETI-McLr3uuU7diqqzgAAAA?w=183&h=124&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 className="articalh5">The effect of ADHD on the life of an individual, their family, and community from preschool to adult life</h5>
                        <button
                          className="articalabtn"
                          onClick={async () => {

                            openArticle('https://adc.bmj.com/content/90/suppl_1/i2');
                            await handleInsert("f5c4ce07-51b5-421d-9c17-672d2752e306", "407f7ce3-3b15-4feb-a36f-c1e1cf2a131f");
                          }}
                        >
                          Read Now
                        </button>
                      

                    </div>
                  </div>
                </div>
              </div>

            </Col>
            <Col>
              <div class="card mb-3 librarycard">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="https://www.psychiatry.org/assets/images/logos/c-logo.svg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                    <h5 className="articalh5">What is ADHD?</h5>
                        <button
                          className="articalabtn"
                          onClick={async () => {

                            openArticle('https://www.psychiatry.org/patients-families/adhd/what-is-adhd');
                            await handleInsert("f5c4ce07-51b5-421d-9c17-672d2752e306", "407f7ce3-3b15-4feb-a36f-c1e1cf2a131f");
                          }}
                        >
                          Read Now
                        </button>
                

                    </div>
                  </div>
                </div>
              </div>

            </Col>
            <Col>
              <div class="card mb-3 librarycard">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="https://childmind.org/wp-content/uploads/2021/07/ChildMindInstitute_Logo_Horizontal.svg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                  <h5 className="articalh5">College Students and Eating Disorders</h5>
                        <button
                          className="articalabtn"
                          onClick={async () => {

                            openArticle('https://www.psychiatry.org/patients-families/adhd/what-is-adhd');
                            await handleInsert("f5c4ce07-51b5-421d-9c17-672d2752e306", "407f7ce3-3b15-4feb-a36f-c1e1cf2a131f");
                          }}
                        >
                          Read Now
                        </button>
                  

                    </div>
                  </div>
                </div>
              </div>

            </Col>
            <Col>
              <div class="card mb-3 librarycard">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="https://th.bing.com/th/id/OIP.I6nbZnVIVaz04S7kVWdRtQAAAA?w=195&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                    <h5 className="articalh5">Taking a Bite Out of Eating Disorders: Facts and Myths</h5>
                        <button
                          className="articalabtn"
                          onClick={async () => {

                            openArticle('https://kids.frontiersin.org/articles/10.3389/frym.2020.545034');
                            await handleInsert("f5c4ce07-51b5-421d-9c17-672d2752e306", "407f7ce3-3b15-4feb-a36f-c1e1cf2a131f");
                          }}
                        >
                          Read Now
                        </button>
          
                    </div>
                  </div>
                </div>
              </div>

            </Col>
            <Col>
              <div class="card mb-3 librarycard">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="https://www.nami.org/NAMI/media/NAMI-Redesign/nami-logo-blue.svg?ext=.svg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">

                  <h5 className="articalh5">My Story With Bipolar Disorder</h5>
                        <button
                          className="articalabtn"
                          onClick={async () => {

                            openArticle('https://www.nami.org/Personal-Stories/My-Story-with-Bipolar-Disorder');
                            await handleInsert("f5c4ce07-51b5-421d-9c17-672d2752e306", "407f7ce3-3b15-4feb-a36f-c1e1cf2a131f");
                          }}
                        >
                          Read Now
                        </button>
                    
                    </div>
                  </div>
                </div>
              </div>

            </Col>
          </Row>
        </Col>
        <h3 className="h3"> Explore a world of knowledge and healing within our carefully curated Books section, where you'll find an array of insightful literature to empower your mental well-being journey.</h3>
        <Col md={4} className="bookboxed">
          <Row>
            <Col>
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1672870598i/61612877.jpg"
                      class="img-fluid rounded-custom"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p>Where to Start: <br /> A Survival Guide to Anxiety, Depression, and Other Mental Health Challengesby Mental Health America</p>
                      <a
                        href="https://www.amazon.com/Where-Start-Survival-Depression-Challenges/dp/059353140X"
                        target="_blank"
                        rel="noopener noreferrer"  >
                      </a> <br />
                      <button className="bookbutton"
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
                    <img
                      src="https://th.bing.com/th?id=OSK.ef05a4d346ce5f5853b2cbf60e1feb75&w=124&h=168&c=7&o=6&dpr=1.3&pid=SANGAM"
                      class="img-fluid rounded-custom"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p>The Upside of Being Down: How Mental Health Struggles Led to My Greatest Successes in Work and Life <br /> by: Jen Gotch</p>
                      <a
                        href="https://www.amazon.com/Upside-Being-Down-Struggles-Successes/dp/1982108819"
                        target="_blank"
                        rel="noopener noreferrer"  >
                      </a> <br />
                      <button className="bookbutton"
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
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1525298236i/39835253.jpg"
                      class="img-fluid rounded-custom"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p>Are u ok?:<br /> A Guide to Caring for Your Mental Health<br /> by Kati Morton</p>
                      <a
                        href="https://www.amazon.com/Are-Guide-Caring-Mental-Health/dp/0738234990"
                        target="_blank"
                        rel="noopener noreferrer"  >
                      </a> <br /> < br />
                      <button className="bookbutton"
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
                    <img
                      src="https://th.bing.com/th?id=OSK.01ea746ae24624adcd0fdca45248d49e&w=124&h=168&c=7&o=6&dpr=1.3&pid=SANGAM"
                      class="img-fluid rounded-custom"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p>Own Your Past Change Your Future: A Not-So-Complicated Approach to Relationships, Mental Health & Wellness<br /> <br />by :John Delony & Dave Ramsey</p>
                      <a
                        href="https://www.goodreads.com/book/show/60279448-own-your-past-change-your-future"
                        target="_blank"
                        rel="noopener noreferrer"  >
                      </a>
                      <button className="bookbutton"
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
                    <img
                      src="https://www.bing.com/th?id=OIP.TBwQxGwwcJrl5RAHx8HS0wHaD4&w=176&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                      class="img-fluid rounded-custom"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p>You Are Not Alone:<br /> The NAMI Guide to Navigating Mental Health <br /> <br /> by: Ken Duckworth</p>
                      <a
                        href="https://www.goodreads.com/book/show/61223190-you-are-not-alone"
                        target="_blank"
                        rel="noopener noreferrer"  >
                      </a> <br />
                      <button className="bookbutton"
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
                    <img
                      src="https://th.bing.com/th?id=OSK.b7a9acb1a3ce125936a0ecade450e12b&w=124&h=168&c=7&o=6&dpr=1.3&pid=SANGAM"
                      class="img-fluid rounded-custom"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p>This Book Will Change Your Mind About Mental Health:<br /> A journey into the heartland of psychiatry<br /><br /> by: Nathan Filer</p>
                      <a
                        href="https://www.goodreads.com/book/show/52992519-this-book-will-change-your-mind-about-mental-health"
                        target="_blank"
                        rel="noopener noreferrer"  >
                      </a>
                      <button className="bookbutton"
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
                    <img
                      src="https://th.bing.com/th?id=OSK.fa74effd7bb60a827b7c4300f7c7aa17&w=124&h=168&c=7&o=6&dpr=1.3&pid=SANGAM"
                      class="img-fluid rounded-custom"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p>The Resilient Life:<br /> Manage Stress, Prevent Burnout, & Strengthen Your Mental and Physical Health <br /><br />by: Susan Biali M.D.</p>
                      <a
                        href="https://www.goodreads.com/book/show/61389729-the-resilient-life"
                        target="_blank"
                        rel="noopener noreferrer"  >
                      </a>
                      <button className="bookbutton"
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
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348611758i/12951039.jpg"
                      class="img-fluid rounded-custom"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p>8 Keys to Recovery from an Eating Disorder: Effective Strategies from Therapeutic Practice and Personal Experience<br />by :Carolyn Costin , Gwen Schubert Grabb & Babette Rothschild</p>
                      <a
                        href="https://www.goodreads.com/book/show/12951039-8-keys-to-recovery-from-an-eating-disorder"
                        target="_blank"
                        rel="noopener noreferrer"  >
                      </a>
                      <button className="bookbutton"
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
                    <img
                      src="https://m.media-amazon.com/images/I/51rbZvBqBsL._SY445_SX342_.jpg"
                      class="img-fluid rounded-custom"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p>365 Ways to Take Control of Your Mental Health: <br />One Revolutionary Concept a Day to Create the Life You Desire <br /><br />by: Taylor Fischer</p>
                      <a
                        href="https://www.goodreads.com/book/show/60063563-365-ways-to-take-control-of-your-mental-health"
                        target="_blank"
                        rel="noopener noreferrer"  >
                      </a>
                      <button className="bookbutton"
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
                    <img
                      src="https://th.bing.com/th?id=OSK.6ca8e3cb729936cec59bbc2f0d3caefb&w=124&h=168&c=7&o=6&dpr=1.3&pid=SANGAM"
                      class="img-fluid rounded-custom"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p>Your Brain Needs a Hug:<br /> Life, Love, Mental Health, and Sandwiches<br /><br /> by: Rae Earl</p>
                      <a
                        href="https://www.goodreads.com/book/show/40864852-your-brain-needs-a-hug"
                        target="_blank"
                        rel="noopener noreferrer"  >
                      </a>  <br />
                      <button className="bookbutton"
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
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1527566380i/40231471.jpg"
                      class="img-fluid rounded-custom"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p>You Are Not a Rock:<br /> A Step-by-Step Guide to Better Mental Health <br /><br />by: Mark Freeman</p>
                      <a
                        href="https://www.goodreads.com/book/show/40231471-you-are-not-a-rock"
                        target="_blank"
                        rel="noopener noreferrer"  >
                      </a> <br />
                      <button className="bookbutton"
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
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1679466680i/75593830.jpg"
                      class="img-fluid rounded-custom"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p>Mind Games:<br /> Winning the Battle for Your Mental and Emotional Health <br /><br />by :Paul Daugherty</p>
                      <a
                        href="https://www.goodreads.com/book/show/75593830-mind-games"
                        target="_blank"
                        rel="noopener noreferrer"
                      ></a> <br />
                      <button className="bookbutton"
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

export default AdminResourceLibrary;
