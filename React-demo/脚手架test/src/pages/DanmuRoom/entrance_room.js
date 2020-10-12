import React, { PureComponent } from 'react'
import style from '../../assets/style/entrance_room.module.scss'
import image  from '../../assets/二维码.png'
//扫描的二维码；发的弹幕都在这里显示
export class Danmu_entrance_room extends PureComponent {
	render() {
		return (
			<div>
				<div className={style.wrapper}></div>
				<div className={style.QR}>
					<img className={style.image} src={image}  />
				</div>
			</div>
		)
	}
}

export default Danmu_entrance_room
