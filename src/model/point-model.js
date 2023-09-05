import { createRoutePoint } from '../moks/route-point.js';

const POINT_COUNT = 6;

export default class PointsModel {
  points = Array.from({length: POINT_COUNT}, createRoutePoint);
  pointsEditing = createRoutePoint();
  getPoints () {
    console.log(this.points);
    return this.points;
  }

  getPointEdithing () {
    console.log(this.pointsEditing);
    return this.pointsEditing;
  }
}