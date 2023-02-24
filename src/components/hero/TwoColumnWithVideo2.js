import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";

import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

import { ReactComponent as PlayIcon } from "feather-icons/dist/icons/play-circle.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/dot-pattern.svg";
import DesignIllustration from "../../images/design-illustration.svg";
import {motion} from 'framer-motion';
import {ReactComponent as StarIcon} from '../../images/star-icon.svg';
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

//tabs
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 mb-4 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`flex relative max-w-3xl lg:max-w-none`;
//tabs


const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row max-w-screen-xl mx-auto py-20`;
const LeftColumn = tw.div`relative lg:w-7/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const Heading = tw.h1`font-black text-3xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;
const WatchVideoButton = styled.button`
  ${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hocus:text-primary-400 focus:outline-none`}
  .playIcon {
    ${tw`stroke-1 w-12 h-12`}
  }
  .playText {
    ${tw`ml-2 font-medium`}
  }
`;


// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10`}
`;

const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`;

export default ({
heading1 = "Общественное движение",
heading2 = "«Дыши, Череповец»",
description="Движение, направленное на поддержку и реализацию президентских инициатив «в области здоровьесбережения граждан», нацпроекта «Экология» и федерального проекта «Чистый воздух».",
primaryButtonText="Присоединиться в VK",
primaryButtonUrl="https://vk.com/ecomonitoringche",

botButtonText="Пожаловаться через бота",
botButtonUrl="https://t.me/ecomonitorbot",
  watchVideoYoutubeUrl="https://www.youtube.com/embed/_GuOjXYl5ew",


    //TABS
                    tabs = {
                        'Датчики': [
                            {
                                mapSrc: "https://maps.sensor.community/#11/59.1219/37.9516",
                                title: "Датчики",
                            }
                        ],
                        "Жалобы": [
                            {
                                mapSrc: "https://sensors.robonomics.network/#/remote/pm10/11/59.1268/37.9303",
                                title: "Жалобы",
                            }
                        ]
                    }
    //TABS
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  //tabs
    const tabsKeys = Object.keys(tabs);
    const [activeTab, setActiveTab] = useState(tabsKeys[0]);
    //tabs

  return (
    <>
      <Header />
      <Container>
        <TwoColumn>
          <LeftColumn>

              <TabsControl>
                  {Object.keys(tabs).map((tabName, index) => (
                      <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                          {tabName}
                      </TabControl>
                  ))}
              </TabsControl>


                  {tabsKeys.map((tabKey, index) => (
                      <TabContent
                          key={index}
                          variants={{
                              current: {
                                  opacity: 1,
                                  scale:1,
                                  display: "flex",
                              },
                              hidden: {
                                  opacity: 0,
                                  scale:1,
                                  display: "none",
                              }
                          }}

                          initial={activeTab === tabKey ? "current" : "hidden"}
                          animate={activeTab === tabKey ? "current" : "hidden"}
                      >
                          {tabs[tabKey].map((card, index) => (


                                  <iframe position="absolute" margin-top="-2rem" src={card.mapSrc} height="480" width="100%" scrolling="no"></iframe>

                          ))}
                      </TabContent>
                  ))}

          </LeftColumn>
          <RightColumn>

              <Heading>{heading1}<br/>{heading2}</Heading>
              <Paragraph>{description}</Paragraph>


              <Actions>
                  <PrimaryButton as="a" href={botButtonUrl}>{botButtonText}</PrimaryButton>
              </Actions>
              <Actions>
                  <PrimaryButton as="a" href={primaryButtonUrl}>{primaryButtonText}</PrimaryButton>
              </Actions>


          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
        <StyledModal
          closeTimeoutMS={300}
          className="mainHeroModal"
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          shouldCloseOnOverlayClick={true}
        >
          <CloseModalButton onClick={toggleModal}>
            <CloseIcon tw="w-6 h-6" />
          </CloseModalButton>
          <div className="content">
            <ResponsiveVideoEmbed url={watchVideoYoutubeUrl} tw="w-full" />
          </div>
        </StyledModal>
      </Container>
    </>
  );
};
