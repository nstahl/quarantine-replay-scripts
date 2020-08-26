const PassthroughBatchAdapter = require("../batch-adapters/passthrough-batch-adapter");
const V001ToJsonBatchAdapter = require("../batch-adapters/v001-to-json-batch-adapter");

class HttpsBatchAdapterFactory {
    static passthroughBatchAdapter = new PassthroughBatchAdapter();
    static v001ToJsonBatchAdapter = new V001ToJsonBatchAdapter();
    static get(batch) {
        if(batch.context.data_plan.block_metadata) {
            return HttpsBatchAdapterFactory.v001ToJsonBatchAdapter;
        }
        return HttpsBatchAdapterFactory.passthroughBatchAdapter;
    }
}

module.exports = HttpsBatchAdapterFactory;