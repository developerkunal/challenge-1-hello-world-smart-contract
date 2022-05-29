use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::collections::LookupMap;

use near_sdk::{env, near_bindgen};

near_sdk::setup_alloc!();

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct Message {
    message: LookupMap<String, String>,
}
impl Default for Message {
    fn default() -> Self {
        Self {
            message: LookupMap::new(b"r".to_vec()),
        }
    }
}
#[near_bindgen]

impl Message {
    pub fn get_message(&self, account_id: String) -> Option<String> {
        return self.message.get(&account_id);
    }

    pub fn set_message(&mut self,message: String) {
        
        let account_id = env::signer_account_id();
        self.message.insert(&account_id, &message);
    }

}