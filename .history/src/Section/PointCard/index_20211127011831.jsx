import {PrimaryButton, SecondaryButton} from '../../components/Button'

import SplitScreen from '../../components/SplitScreen'

export default function PointCard({}) {
  return (
    <SplitScreen leftWeight="w-1/3">
      <img id="left" className="h-36 p-4 bg-purple-100"
        src="data:image/png;base64,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" />
      <div id="right" className="text-purple-800">
        <h3 className="text-4xl font-semibold mb-3">2400 XP</h3>
        <p className="text-lg">Point</p>
        <div className="flex mt-4">
          <SecondaryButton name="Redeem"/>
          <PrimaryButton name="Collect Point"/>
        </div>
      </div>
    </SplitScreen>
  )
}
