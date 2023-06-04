import { __ } from '@wordpress/i18n';
import './editor.scss';
import { InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, PanelRow, Button, Carousel } from '@wordpress/components';

const Edit = ({attributes, setAttributes}) => {
	const { images } = attributes;

	const onSelectImages = (newImages) => {
		setAttributes( { images: newImages } );
	};

	const onRemoveImage = (removedImage) => {
		const updatedImages = images.filter( (images) => images.id !== removedImage.id );
		setAttributes( { images: updatedImages } );
	};

	return (
		<div>
			<InspectorControls>
				<PanelBody title={ __( 'Image Settings', 'image-slider' ) }>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect = { onSelectImages }
								multiple = { true }
								gallery = { true }
								value = { images.map((image)=> image.id) }
								render = { ({ open }) => (
									<Button
										onClick = { open }
										className = 'button button-large'>
										{ __('Insert Images', 'image-slider') }
									</Button>
								) }
							/>
						</MediaUploadCheck>
					</PanelRow>
					{images.length > 0 && (
						<PanelRow>
							<h3>{__('Selected Images', 'image-slider')}</h3>
							<ul>
								{images.map((image) => {
									<li key = { image.id }>
										<img src = {image.url} alt = {image.alt} />
										<Button onClick={() => onRemoveImage(image)}>
											{__('Remove', 'image-slider')}
										</Button>
									</li>
								})}
							</ul>
						</PanelRow>
					)}
				</PanelBody>
			</InspectorControls>

			{images.length > 0 && (
				<Carousel>
					{images.map((image) => (
						<div key={image.id}>
							<img src={image.url} alt={image.alt} />
						</div>
					))}
				</Carousel>
			)}
		</div>
	);
}

export default Edit;