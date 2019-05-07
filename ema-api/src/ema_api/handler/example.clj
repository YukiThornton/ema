(ns ema-api.handler.example
  (:require [ataraxy.core :as ataraxy]
            [ataraxy.response :as response] 
            [integrant.core :as ig]))

(defmethod ig/init-key :ema-api.handler/example [_ options]
  (fn [{[_] :ataraxy/result}]
    [::response/ok {:example "data"}]))

(defmethod ig/init-key :ema-api.handler/emas [_ options]
  (fn [{[_] :ataraxy/result}]
    [::response/ok {:emas "emas!"}]))
