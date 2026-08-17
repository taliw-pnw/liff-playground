import { FilterTypes } from './FilterTypes'

const base = new URL(location.href).origin
export const SHARE_TARGET_PICKER_FIXED_ARGUMENT_LIST = [
  {
    label: 'text',
    value: {
      type: 'text',
      text: 'Hello, World!',
    },
  },
  {
    label: 'sticker',
    value: {
      type: 'sticker',
      packageId: '446',
      stickerId: '1988',
    },
  },
  {
    label: 'image',
    value: {
      type: 'image',
      originalContentUrl: `${base}/assets/stp_image.jpg`,
      previewImageUrl: `${base}/assets/stp_image.jpg`,
    },
  },
  {
    label: 'video',
    value: {
      type: 'video',
      originalContentUrl: `${base}/assets/stp_video.mp4`,
      previewImageUrl: `${base}/assets/stp_image.jpg`,
      trackingId: 'track-id',
    },
  },
  {
    label: 'audio',
    value: {
      type: 'audio',
      originalContentUrl: `${base}/assets/stp_audio.mp3`,
      duration: 60000,
    },
  },
  {
    label: 'location',
    value: {
      type: 'location',
      title: 'my location',
      address: '〒102-8282 東京都千代田区紀尾井町1番3号',
      latitude: 35.67966,
      longitude: 139.73669,
    },
  },
  {
    label: 'flex',
    value: {
      type: 'flex',
      altText: 'Flex Message',
      contents: {
        type: 'bubble',
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'md',
          contents: [
            {
              type: 'text',
              text: "BROWN'S ADVENTURE",
              size: 'xl',
              gravity: 'center',
              weight: 'bold',
              wrap: true,
            },
            {
              type: 'box',
              layout: 'vertical',
              spacing: 'sm',
              margin: 'lg',
              contents: [
                {
                  type: 'box',
                  layout: 'baseline',
                  spacing: 'sm',
                  contents: [
                    {
                      type: 'text',
                      text: 'Date',
                      flex: 1,
                      size: 'sm',
                      color: '#AAAAAA',
                    },
                    {
                      type: 'text',
                      text: 'Monday 25, 9:00PM',
                      flex: 4,
                      size: 'sm',
                      color: '#666666',
                      wrap: true,
                    },
                  ],
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  spacing: 'sm',
                  contents: [
                    {
                      type: 'text',
                      text: 'Place',
                      flex: 1,
                      size: 'sm',
                      color: '#AAAAAA',
                    },
                    {
                      type: 'text',
                      text: 'LINE Thailand',
                      flex: 4,
                      size: 'sm',
                      color: '#666666',
                      wrap: true,
                    },
                  ],
                },
                {
                  type: 'box',
                  layout: 'vertical',
                  margin: 'xxl',
                  contents: [
                    {
                      type: 'spacer',
                    },
                    {
                      type: 'image',
                      url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/linecorp_code_withborder.png',
                      size: 'xl',
                      aspectMode: 'cover',
                    },
                    {
                      type: 'text',
                      text: 'You can enter the theater by using this code instead of a ticket',
                      margin: 'xxl',
                      size: 'xs',
                      color: '#AAAAAA',
                      wrap: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
  },
].map(({ label, value }) => ({
  label,
  value: JSON.stringify(value, null, 4),
}))

export const QR_IMG_MAP = {
  [FilterTypes.LIFF]: `${base}/assets/qr_liff.png`,
  [FilterTypes.MINI]: `${base}/assets/qr_mini.png`,
  [FilterTypes.MINI_PREVIEW]: `${base}/assets/qr_mini_preview.png`,
}
