import { Transform } from 'class-transformer';
import { IModel } from './model.interface';
import { Rectangle } from './rectangle.modl';
import { transformKeyValue } from './transform.model';

/** VehicleModelingResult (车辆建模结果) */
export class VehicleModelingResult implements IModel {
  /**	String	模型数据	O	*/
  ModelData?: string;
  /**	Rectangle	车辆坐标	O	*/
  VehicleRect?: Rectangle;
  /**	Rectangle	车牌坐标	O	*/
  PlateRect?: Rectangle;
  /**	String	车牌号码	O	*/
  PlateNo?: string;
  /**	String	车牌类型，参见：2.3.12.2	O	*/
  @Transform(transformKeyValue)
  PlateType?: string;
  /**	String	车牌类型说明	O	*/
  PlateTypeName?: string;
  /**	String	车身颜色，参见：2.3.12.2	O	*/
  @Transform(transformKeyValue)
  VehicleColor?: string;
  /**	String	车身颜色说明	O	*/
  VehicleColorName?: string;
  /**	String	车身颜色深浅，参见：2.3.12.2	O	*/
  @Transform(transformKeyValue)
  VehicleColorDepth?: string;
  /**	String	车身颜色深浅说明	O	*/
  VehicleColorDepthName?: string;
  /**	String	车辆类型，参见：2.3.12.2	O	*/
  @Transform(transformKeyValue)
  VehicleType?: string;
  /**	String	车辆类型说明	O	*/
  VehicleTypeName?: string;
  /**	String	车辆主品牌，参见：2.3.12.2	O	*/
  @Transform(transformKeyValue)
  VehicleLogo?: string;
  /**	String	车辆主品牌说明	O	*/
  VehicleLogoName?: string;
  /**	String	车辆子品牌，参见：2.3.12.2	O	*/
  @Transform(transformKeyValue)
  VehicleSubLogo?: string;
  /**	String	车辆子品牌说明	O	*/
  VehicleSubLogoName?: string;
  /**	String	车牌颜色，参见：2.3.12.2	O	*/
  @Transform(transformKeyValue)
  PlateColor?: string;
  /**	String	车牌颜色说明	O	*/
  PlateColorName?: string;
  /**	Boolean	主驾驶员是否系安全带	O	*/
  PilotSafebelt?: boolean;
  /**	String	主驾驶员是否系安全带说明	O	*/
  PilotSafebeltName?: string;
  /**	Boolean	主驾驶遮阳板是否打开	O	*/
  PilotSunvisor?: boolean;
  /**	String	主驾驶遮阳板是否打开说明	O	*/
  PilotSunvisorName?: string;
  /**	Boolean	副驾驶员是否系安全带	O	*/
  VicePilotSafebelt?: boolean;
  /**	String	副驾驶员是否系安全带说明	O	*/
  VicePilotSafebeltName?: string;
  /**	Boolean	副驾驶遮阳板是否打开	O	*/
  VicePilotSunvisor?: boolean;
  /**	String	副驾驶遮阳板是否打开说明	O	*/
  VicePilotSunvisorName?: string;
  /**	Boolean	打电话状态	O	*/
  UsePhone?: boolean;
  /**	String	打电话状态说明	O	*/
  UsePhoneName?: string;
  /**	String	危险品状态，参见：2.3.12.2	O	*/
  @Transform(transformKeyValue)
  DangMark?: string;
  /**	String	危险品状态名称	O	*/
  DangMarkName?: string;
  /**	Boolean	是否黄标车	O	*/
  Envprosign?: boolean;
  /**	String	是否黄标车说明	O	*/
  EnvprosignName?: string;
  /**	String	车牌状态	O	*/
  PlateState?: string;
  /**	String	车牌状态说明	O	*/
  PlateStateName?: string;
  /**	Boolean	天窗是否站人	O	*/
  Pdvs?: boolean;
  /**	String	天窗是否站人说明	O	*/
  PdvsName?: string;
  /**	String	车牌识别方向	O	*/
  VehicleHead?: string;
  /**	String	车牌识别方向说明	O	*/
  VehicleHeadName?: string;
  /**	Boolean	挂件状态	O	*/
  Pendant?: boolean;
  /**	String	挂件状态说明	O	*/
  PendantName?: string;
  /**	Boolean	是否临时车牌	O	*/
  TempPlateNo?: boolean;
  /**	String	是否临时车牌说明	O	*/
  TempPlateNoName?: string;
  /**	String	三轮车是否有蓬	O	*/
  TricycleCanopy?: string;
  /**	String	三轮车是否有蓬说明	O	*/
  TricycleCanopyName?: string;
  /**	Boolean	是否摆件	O	*/
  Decoration?: boolean;
  /**	String	是否摆件说明	O	*/
  DecorationName?: string;
  /**	Boolean	是否有纸巾盒	O	*/
  TissueBox?: boolean;
  /**	String	是否有纸巾盒说明	O	*/
  TissueBoxName?: string;
  /**	Boolean	是否有卡片	O	*/
  Card?: boolean;
  /**	String	是否有卡片说明	O	*/
  CardName?: string;
  /**	Boolean	副驾驶是否有人	O	*/
  Copilot?: boolean;
  /**	String	副驾驶是否有人说明	O	*/
  CopilotName?: string;
  /**	Boolean	副驾驶是否怀抱婴儿/儿童单独乘坐副驾	O	*/
  FrontChild?: boolean;
  /**	String	副驾驶是否怀抱婴儿/儿童单独乘坐副驾说明	O	*/
  FrontChildName?: string;
  /**	Boolean	是否渣土车	O	*/
  MuckTruck?: boolean;
  /**	String	是否渣土车说明	O	*/
  MuckTruckName?: string;
  /**	Boolean	是否有天窗	O	*/
  Sunroof?: boolean;
  /**	String	是否有天窗说明	O	*/
  SunroofName?: string;
  /**	Boolean	是否有行李架	O	*/
  LuggageRack?: boolean;
  /**	String	是否有行李架说明	O	*/
  LuggageRackName?: string;
  /**	Boolean	是否车身喷字	O	*/
  SprayPainted?: boolean;
  /**	String	是否车身喷字说明	O	*/
  SprayPaintedName?: string;
  /**	Boolean	是否有备胎	O	*/
  SpareTire?: boolean;
  /**	String	是否有备胎说明	O	*/
  SpareTireName?: string;
  /**	Boolean	渣土车是否盖板	O	*/
  CoverPlate?: boolean;
  /**	String	渣土车是否盖板说明	O	*/
  CoverPlateName?: string;
  /**	Boolean	是否有贴标	O	*/
  Label?: boolean;
  /**	String	是否有贴标说明	O	*/
  LabelName?: string;
}
