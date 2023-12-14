import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { createClient } from '@supabase/supabase-js';
import styles from './ResourceLibrary.module.css';
import Navbar from "../../Components/molecules/Navbar/index.jsx";
import supabase from '../../supa/supabase/supabaseClient';

// Define handleCardClick function somewhere in your code
const handleCardClick = (param1, param2) => {
  // Your logic here
  console.log("Clicked with parameters:", param1, param2);
  // Add the logic you want to execute when the card is clicked
};

const ResourceLibrary = () => {
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
      <Navbar />
      <h1 className={styles.h1}>Resource Library</h1>
      <h3 className={styles.resourcelibraryh}>
        Explore our video section within the resource library, where you'll find valuable content
        to enhance your mental well-being and gain insights into self-care and personal growth.
      </h3>
      <Row className={`${styles.container}websitecontainer`}>

        <Col md={9} className={styles.youtubeboxed}>
          <Row>
            <h4 className={styles.titalh}> Depression : </h4> <br />
            <Col>
              <img
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/fWFuQR_Wt4M/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() =>
                  openYoutubeVideo('https://www.youtube.com/embed/fWFuQR_Wt4M?si=lW5Rx3jPQzXEl32m')
                }
              />
              <p className={styles.youtubeh}> What is Depression?</p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://i3.ytimg.com/vi/tJQRsIbD110/hqdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110')}
              />
              <p className={styles.youtubeh}>Depression Explained </p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/yVKaphs9sPU/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/yVKaphs9sPU?si=hEAOEL12WJN6HsEc')}
              />
              <p className={styles.youtubeh}> The Science of Sadness</p> <br />
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/KSClXw4Wfxs/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/KSClXw4Wfxs?si=fIdo-ZBQMivIXcA0')}
              />
              <p className={styles.youtubeh}> 8 Signs of Major Depressive Disorder</p>
              <button
                className={styles.youtubrbutton}
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("3d1f1ad7-c064-450a-81f5-d55f262dcc2f", "8d9f796b-e86b-4863-8aeb-a2cbef67bc32");

                }}
              >
                Watch Video
              </button>
            </Col>
            <h4 className={styles.titalh}> Anxiety : </h4> <br />
            <Col>
              <img
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/BVJkf8IuRjE/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/BVJkf8IuRjE?si=eBr_GeJ-P2QhAya-')}
              />
              <p className={styles.youtubeh}>What is Anxiety?</p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/QLjPrNe63kk/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/QLjPrNe63kk?si=YX0YUQC5fk_01OJ3')}
              />
              <p className={styles.youtubeh}>Social Anxiety Disorder</p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/w_2STJAJhJM/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/w_2STJAJhJM?si=Z7XqqB8nrqq9xHTE')}
              />
              <p className={styles.youtubeh}>Incredible animation on battling </p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/zTuX_ShUrw0/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/zTuX_ShUrw0?si=aNW2QhuKZVFPSPnX')}
              />
              <p className={styles.youtubeh}>Rewiring the Anxious Brain</p>
              <button
                className={styles.youtubrbutton}
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("9861d00c-a5a6-4653-9dad-7c9b48003ca8", "ba3d336d-feb1-497d-96f8-8cbcee019bb5");

                }}
              >
                Watch Video
              </button>
            </Col>
            <h4 className={styles.titalh}> Stress : </h4> <br />
            <Col>
              <img
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/XUDt52IlzIE/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/f9yCYlV-gNM?si=7isN-HDgQGlxAhY3')}
              />
              <p className={styles.youtubeh}>Effects and Symptoms of Stress</p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/AlMfEL_sCYI/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/AlMfEL_sCYI?si=-TntfTC82b8KzMBN')}
              />
              <p className={styles.youtubeh}>Terrible Symptoms Of Stress On The Body</p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/e7OpB6xy83Y/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/e7OpB6xy83Y?si=jsz-z6xF-rmypY1w')}
              /> <p className={styles.youtubeh}>Signs of Stress | Stress Symptoms </p >
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/v-t1Z5-oPtU/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/v-t1Z5-oPtU?si=dTSLHcZtfhD863SE')}
              />
              <p className={styles.youtubeh}>How stress affects your body </p>
              <button
                className={styles.youtubrbutton}
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("2b715c64-5c8c-454c-be85-ff00527239aa", "aceced93-bcc8-4ce2-afd0-a2cccd7b2799");

                }}
              >
                Watch Video
              </button>
            </Col>
            <h4 className={styles.titalh}> Insomnia  : </h4> <br />
            <Col>
              <img
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/vdc8JonEax8/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/vdc8JonEax8?si=sIkS28IUA5gOMEXb')}
              />
              <p className={styles.youtubeh}>Insomnia Explained Clearly </p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/WVPtF7gr1jw/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/WVPtF7gr1jw?si=QpsZ0qohm8CkRzNt')}
              />
              <p className={styles.youtubeh}>How to Fall Asleep Faster</p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/gIwU5INBV_0/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/gIwU5INBV_0?si=Lxks5Scf8qPJQa19')}
              />
              <p className={styles.youtubeh}>What is Insomnia?</p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/_tXFhGRqggc/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/_tXFhGRqggc?si=Fp69UDW-IhzfyUI_')}
              />
              <p className={styles.youtubeh}>What is Insomnia - Diagnosis and Treatments</p>
              <button
                className={styles.youtubrbutton}
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("0b96eb49-0599-42cc-bfed-8c925ed18e57", "733628c5-325a-4c97-81b8-adc6de535093");

                }}
              >
                Watch Video
              </button>
            </Col>
            <h4 className={styles.titalh}> Overthinking : </h4> <br />
            <Col>
              <img
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/oGqu_U0EI8c/sddefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110')}
              />
              <p className={styles.youtubeh}>10 Things You Can Do To Stop Overthinking</p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/TZ9FNL1iI54/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/oGqu_U0EI8c?si=oNt7flzvP0KxsOAY')}
              />
              <p className={styles.youtubeh}>Overcoming Overthinking</p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/NU9ajgqYag8/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/oGqu_U0EI8c?si=ZZkyIGR7M54LM3NH')}
              />
              <p className={styles.youtubeh}>10 Signs You Might Be Overthinking</p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/yQumuTeDMC4/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/TZ9FNL1iI54?si=eJjnZX9eMjNmdqGn')}
              />
              <p className={styles.youtubeh}>How To Stop Overthinking Everything You Do</p>
              <button
                className={styles.youtubrbutton}
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("1bad27b5-941d-47dd-b957-a5d3324e4cc8", "5aacd6cd-47c0-4c6c-9019-212fda634697");

                }}
              >
                Watch Video
              </button>
            </Col>
            <h4 className={styles.titalh}> Eating Disorder : </h4> <br />
            <Col>
              <img
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/aBl6-UTvmn8/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/NU9ajgqYag8?si=SVqZMKl22ltDXGBI')}
              />
              <p className={styles.youtubeh}>What is an Eating Disorder?</p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/DRQe8NcqvVY/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/yQumuTeDMC4?si=4lZp_PT58ZkMwSyZ')}
              />
              <p className={styles.youtubeh}> What it means to have an eating disorder</p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/3Bax8ijH038/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/aBl6-UTvmn8?si=nWuLuKGPfm3u2JFA')}
              />
              <p className={styles.youtubeh}> Why are eating disorders so hard to treat?</p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/MsSXh1BxLjE/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/DRQe8NcqvVY?si=JLcVIQBH7EvfgyMo')}
              />
              <p className={styles.youtubeh}> Signs of an Eating Disorder</p>
              <button
                className={styles.youtubrbutton}
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("1ba24848-66ea-4181-97de-7134e1200b43", "7456db76-b79f-4be7-8608-27d770dca634");

                }}
              >
                Watch Video
              </button>
            </Col>
            <h4 className={styles.titalh}> Bipolar Disorder : </h4> <br />
            <Col>
              <img
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/G9vkGCo7Gtg/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/3Bax8ijH038?si=TCM4dXil6N7mnmsU')}
              />
              <p className={styles.youtubeh}> What is Bipolar Disorder?</p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/KSvk8LLBo2g/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/MsSXh1BxLjE?si=Im3yCNm0oRcRqdig')}
              />
              <p className={styles.youtubeh}> Bipolar disorder (depression & mania) </p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/AM7vf5HJxaQ/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/G9vkGCo7Gtg?si=oriUZWz1r_Yhz-MC')}
              />
              <p className={styles.youtubeh}>Bipolar Disorder vs Depression </p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/ZwMlHkWKDwM/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/KSvk8LLBo2g?si=t5t4rqddQ_HahCB9')}
              />
              <p className={styles.youtubeh}> Depressive and Bipolar Disorders </p>
              <button
                className={styles.youtubrbutton}
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("c0149b6e-ea67-4121-83ec-3d897ebeffd6", "27e7fa73-a1ea-4b79-9848-598c98bc272c");

                }}
              >
                Watch Video
              </button>
            </Col>
            <h4 className={styles.titalh}> Phobias : </h4> <br />
            <Col>
              <img
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/PCOg2G797ek/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/AM7vf5HJxaQ?si=nmeVDsPUZX_Ju8E8')}
              />
              <p className={styles.youtubeh}> Phobias - specific phobias and social phobia</p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/oWtVbDs1gkU/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/ZwMlHkWKDwM?si=xk6t0FejpUXku2DO')}
              />
              <p className={styles.youtubeh}> 9 Common Phobias</p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/E705zO58SnQ/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/PCOg2G797ek?si=vwgjfKEOJduaTGgW')}
              />
              <p className={styles.youtubeh}> Phobia, Causes, Signs and Symptoms</p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/9IV13gJ811c/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/oWtVbDs1gkU?si=RTFk8CI97OE7e_DY')}
              />
              <p className={styles.youtubeh}>Weirdest Phobias People Suffer From!</p>
              <button
                className={styles.youtubrbutton}
                onClick={async () => {
                  openYoutubeVideo('https://www.youtube.com/watch?v=tJQRsIbD110');
                  await handleInsert("05dd5e84-71c9-4bbd-83cf-3cf61e5b126c", "41286323-861c-4cc5-846d-a66be2b3bc00");

                }}
              >
                Watch Video
              </button>
            </Col>
            <h4 className={styles.titalh}> ADHD : </h4> <br />
            <Col>
              <img
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/5l2RIOhDXvU/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/E705zO58SnQ?si=BlpWuJ5ZKt5QLXO7')}
              />
              <p className={styles.youtubeh}>What is ADHD?</p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/mlIJ_oSJsYw/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/wVTvcxEWClg?si=ewk_8b1LYwC8sGJc')}
              />
              <p className={styles.youtubeh}>10 Common ADHD Symptoms in Adults </p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/hC085F1rEDg/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/hC085F1rEDg?si=TQVfpd0ztUAQ3HuT')}
              />
              <p className={styles.youtubeh}>ADHD & Emotions </p>
              <button
                className={styles.youtubrbutton}
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
                className={styles.youtubevideo}
                src="https://img.youtube.com/vi/I7QGn1Ri9cg/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                onClick={() => openYoutubeVideo('https://youtu.be/I7QGn1Ri9cg?si=wUOd_7mRHhyCQ3qz')}
              />
              <p className={styles.youtubeh}>ADHD Medication</p>
              <button
                className={styles.youtubrbutton}
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
      </Row>

    </div>
  );
};

export default ResourceLibrary;
