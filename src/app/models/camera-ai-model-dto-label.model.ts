import { CameraAILabelDataType } from 'src/app/enums/camera-ai-label-data-type.enum';
import { EnumValue } from './enum-value.model';
import { IModel } from './model.interface';

/** CameraAIModelDTOLabel (AI摄像机模型DTO标签)								
例子：垃圾分类的垃圾类型，垃圾分类的垃圾颜色等，								
枚举：LabelName =”颜色”，EnumValues=”0:红色，1：黄色，2：绿色…”	*/
export class CameraAIModelDTOLabel implements IModel {
  /**	String	模型数据ID	M	*/
  ModelId!: string;
  /**	Int32	模型数据类型：1-检测数据，2-分类数据	O	*/
  ModelType?: number;

  /**	String	标签ID	M	*/
  LabelId!: string;
  /**	String	标签数值	O	*/
  LabelValue?: string;
  /**	String	模型标签值	O	*/
  LabelModelValue?: string;
  /**	String	标签名称	M	*/
  LabelName!: string;
  /**	String	标签值的单位，只有Int类型是有单位的	O	*/
  Unit?: string;
  /**	String	标签值类型：None, Int，String，Enum	M	*/
  DataType!: CameraAILabelDataType;

  /**	String	数值	O	*/
  DataValue?: string;
  /**	Boolean	是否为与叶标签	O	*/
  IsLeaf?: boolean;
  /**	EnumValue[]	枚举类型数值列表	O	*/
  EnumValues?: EnumValue[];
  /**	CameraAIModelDTOLabel[]	子标签、子属性	O	*/
  Labels?: CameraAIModelDTOLabel[];
}
