import React from 'react'
import PropTypes from 'prop-types'
import {
	BohemianIcon,
	BrideIcon,
	CeremonialIcon,
	ClinkingGlassesIcon,
	ComicConIcon,
	CosplayIcon,
	EquestrianIcon,
	EveningWearIcon,
	EverydayWearIcon,
	FormalIcon,
	GraduationIcon,
	HalloweenIcon,
	HeartWithArrowIcon,
	HikingIcon,
	KidswearIcon,
	MardiGrasIcon,
	MonroeDressIcon,
	OktoberfestIcon,
	ProstheticLegIcon,
	PurseIcon,
	RedCarpetIcon,
	RidingIcon,
	RobeIcon,
	ScarfIcon,
	SizePositiveIcon,
	SpringIcon,
	SteampunkIcon,
	SummerIcon,
	SwimwearIcon,
	TobaccoPouchIcon,
	TutuIcon,
	WalletIcon,
	WinterIcon,
	AutumnIcon,
	WorkwearIcon,
} from '@/assets/icons/fashion'
import { UserIcon } from '@/assets/icons/user-interface'

const FashionTagIcon = ({ variant, className, key }) => {
	const generateIcon = () => {
		switch (variant.replace(/\s/g, '').toLowerCase()) {
		case 'adaptive':
			return (<ProstheticLegIcon className={className} key={key}/>)

		case 'autumn':
			return (<AutumnIcon className={className} key={key}/>)

		case 'bohemian':
			return (<BohemianIcon className={className} key={key}/>)

		case 'bride':
			return (<BrideIcon className={className} key={key}/>)

		case 'ceremonial':
			return (<CeremonialIcon className={className} key={key}/>)

		case 'cocktail':
			return (<ClinkingGlassesIcon className={className} key={key}/>)

		case 'comiccon':
			return (<ComicConIcon className={className} key={key} />)

		case 'cosplay':
			return (<CosplayIcon className={className} key={key}/>)

		case 'dance':
			return (<TutuIcon className={className} key={key}/>)

		case 'dresstoimpress':
			return (<HeartWithArrowIcon className={className} key={key}/>)

		case 'equestrian':
			return (<EquestrianIcon className={className} key={key}/>)

		case 'eveningwear':
			return (<EveningWearIcon className={className} key={key}/>)

		case 'everyday':
			return (<EverydayWearIcon className={className} key={key}/>)

		case 'formal':
			return (<FormalIcon className={className} key={key}/>)

		case 'graduation':
			return (<GraduationIcon className={className} key={key}/>)

		case 'halloween':
			return (<HalloweenIcon className={className} key={key}/>)

		case 'hiking':
			return (<HikingIcon className={className} key={key}/>)

		case 'homewear':
			return (<RobeIcon className={className} key={key}/>)

		case 'kidswear':
			return (<KidswearIcon className={className} key={key}/>)

		case 'mardigras':
			return (<MardiGrasIcon className={className} key={key}/>)

		case 'oktoberfest':
			return (<OktoberfestIcon className={className} key={key}/>)

		case 'purse':
			return (<PurseIcon className={className} key={key}/>)

		case 'redcarpet':
			return (<RedCarpetIcon className={className} key={key}/>)

		case 'riding':
			return (<RidingIcon className={className} key={key}/>)

		case 'scarf':
			return (<ScarfIcon className={className} key={key}/>)

		case 'sizepositive':
			return (<SizePositiveIcon className={className} key={key}/>)

		case 'spring':
			return (<SpringIcon className={className} key={key}/>)

		case 'steampunk':
			return (<SteampunkIcon className={className} key={key}/>)

		case 'summer':
			return (<SummerIcon className={className} key={key}/>)

		case 'swimwear':
			return (<SwimwearIcon className={className} key={key}/>)

		case 'tobaccopouch':
			return (<TobaccoPouchIcon className={className} key={key}/>)

		case 'vintage':
			return (<MonroeDressIcon className={className} key={key}/>)

		case 'wallet':
			return (<WalletIcon className={className} key={key}/>)

		case 'winter':
			return (<WinterIcon className={className} key={key}/>)

		case 'workwear':
			return (<WorkwearIcon className={className} key={key}/>)

		default:
			return (<UserIcon className={className} key={key} />)
		}
	}
	return generateIcon()
}

FashionTagIcon.propTypes = {
	variant: PropTypes.oneOf([
		'adaptive', 'autumn', 'bohemian', 'bride', 'ceremonial', 'cocktail',
		'comic con', 'cosplay', 'dance', 'dress to impress', 'equestrian', 'evening wear',
		'everyday', 'formal', 'graduation', 'halloween', 'hiking', 'homewear', 'kidswear',
		'mardi gras', 'oktoberfest', 'purse', 'red carpet', 'riding', 'scarf', 'size positive',
		'spring', 'steampunk', 'summer', 'swimwear', 'tobacco pouch', 'vintage', 'wallet',
		'workwear',
	]).isRequired,
	className: PropTypes.object,
	key: PropTypes.string,
}

export default FashionTagIcon
