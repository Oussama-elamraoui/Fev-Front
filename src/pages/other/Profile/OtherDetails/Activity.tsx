import React from "react";
import classNames from "classnames";
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.min.css'
import './styleTimeLine.css'
// types
import { ActivityItemTypes } from "./data";

interface ActivityProps {
  activityTimeline: ActivityItemTypes[];
}

const Activity = ({ activityTimeline }: ActivityProps) => {
  return (
    <>
      {(activityTimeline || []).map((activity, index) => {
        return (
          <React.Fragment key={index}>
            <h5 className={index === 0 ? "mt-1" : "mt-4"}>
              {activity.activityTime}
            </h5>
            <div
              className={classNames("left-timeline", "mt-3", "ps-3", {
                "mb-3": index === 0,
              })}
            >
              <ul className="list-unstyled events mb-0">
                {(activity.activities || []).map((item, index) => {
                  return (
                    <li key={index} className="event-list">
                      <div className="pb-4">
                        <div className="d-flex">
                          <div className="event-date text-center me-4 flex-shrink-0">
                            <div className="bg-soft-primary p-1 rounded text-primary fs-14">
                              {("0" + item.hours).slice(-2)} hours ago
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="fs-15 mt-0 mb-1">{item.title}</h6>
                            <p className="text-muted fs-14">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            
          </React.Fragment>
        );
      })}
      

      {/* <div className="container">
        <h3 className="card-title">Timeline Style : Demo-4</h3>
        <div className="row">
            <div className="col-md-12">
                <div className="main-timeline4">
                    <div className="timeline">
                        <span className="timeline-icon"></span>
                        <span className="year">2017</span>
                        <div className="timeline-content">
                            <h3 className="title">Web Desginer</h3>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis justo id pulvinar suscipit. Pellentesque rutrum vehicula erat sed dictum. Integer quis turpis magna. Suspendisse tincidunt elit at erat tincidunt, vel vulputate arcu dapibus. Etiam accumsan ornare posuere. Nullam est.
                            </p>
                        </div>
                    </div>
                    <div className="timeline">
                        <span className="timeline-icon"></span>
                        <span className="year">2016</span>
                        <div className="timeline-content">
                            <h3 className="title">Web Developer</h3>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis justo id pulvinar suscipit. Pellentesque rutrum vehicula erat sed dictum. Integer quis turpis magna. Suspendisse tincidunt elit at erat tincidunt, vel vulputate arcu dapibus. Etiam accumsan ornare posuere. Nullam est.
                            </p>
                        </div>
                    </div>
                    <div className="timeline">
                        <span className="timeline-icon"></span>
                        <span className="year">2015</span>
                        <div className="timeline-content">
                            <h3 className="title">Web Desginer</h3>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis justo id pulvinar suscipit. Pellentesque rutrum vehicula erat sed dictum. Integer quis turpis magna. Suspendisse tincidunt elit at erat tincidunt, vel vulputate arcu dapibus. Etiam accumsan ornare posuere. Nullam est.
                            </p>
                        </div>
                    </div>
                    <div className="timeline">
                        <span className="timeline-icon"></span>
                        <span className="year">2014</span>
                        <div className="timeline-content">
                            <h3 className="title">Web Developer</h3>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis justo id pulvinar suscipit. Pellentesque rutrum vehicula erat sed dictum. Integer quis turpis magna. Suspendisse tincidunt elit at erat tincidunt, vel vulputate arcu dapibus. Etiam accumsan ornare posuere. Nullam est.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <div className="container">
        <h3 className="card-title">Timeline Style : Demo-1</h3>
        <div className="row">
            <div className="col-md-12">
                <div className="main-timeline">
                    <a href="#" className="timeline">
                        <div className="timeline-icon"><i className="fa fa-globe"></i></div>
                        <div className="timeline-content">
                            <h3 className="title">2018</h3>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                            </p>
                        </div>
                    </a>
                    <a href="#" className="timeline">
                        <div className="timeline-icon"><i className="fa fa-rocket"></i></div>
                        <div className="timeline-content">
                            <h3 className="title">2015</h3>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                            </p>
                        </div>
                    </a>
                    <a href="#" className="timeline">
                        <div className="timeline-icon"><i className="fa fa-briefcase"></i></div>
                        <div className="timeline-content">
                            <h3 className="title">2012</h3>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                            </p>
                        </div>
                    </a>
                    <a href="#" className="timeline">
                        <div className="timeline-icon"><i className="fa fa-mobile"></i></div>
                        <div className="timeline-content">
                            <h3 className="title">2009</h3>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div> */}
    </>
  );
};

export default Activity;
